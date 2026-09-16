#!/usr/bin/env node
/**
 * Live MCP smoke test for the four hosted standards servers.
 *
 * For each endpoint it performs a real Streamable HTTP handshake: an
 * `initialize` request followed by a separate `tools/list` request (the exact
 * split-request path a stateful-misconfigured server rejects with
 * "Server not initialized"). It passes only if tools/list returns a non-empty
 * tool set. Exits non-zero if any endpoint fails, so a regression fails loudly
 * in CI instead of drifting silently.
 *
 * Usage:
 *   node scripts/smoke-mcp.mjs
 *   node scripts/smoke-mcp.mjs https://one-endpoint/mcp   # check a single URL
 *
 * No dependencies. Requires Node 18+ (global fetch).
 */

const ENDPOINTS = {
  csis: 'https://csis-production.up.railway.app/mcp',
  'frame-language': 'https://frame-language-production.up.railway.app/mcp',
  'evidence-integrity': 'https://proof-of-coordevidence-integrity-production.up.railway.app/mcp',
  ds4ai: 'https://ds4ai-production.up.railway.app/mcp',
}

const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json, text/event-stream',
}
const TIMEOUT_MS = 20000

// A Streamable HTTP response is either plain JSON or an SSE stream whose
// `data:` line carries the JSON-RPC message. Parse both.
function parseRpc(text) {
  const trimmed = text.trim()
  if (trimmed.startsWith('{')) return JSON.parse(trimmed)
  for (const line of trimmed.split('\n')) {
    const m = line.match(/^data:\s*(\{.*\})\s*$/)
    if (m) return JSON.parse(m[1])
  }
  throw new Error('no JSON-RPC message in response: ' + trimmed.slice(0, 160))
}

async function rpc(url, body) {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, { method: 'POST', headers: HEADERS, body: JSON.stringify(body), signal: ctrl.signal })
    return parseRpc(await res.text())
  } finally {
    clearTimeout(t)
  }
}

async function checkEndpoint(name, url) {
  const init = await rpc(url, {
    jsonrpc: '2.0', id: 1, method: 'initialize',
    params: { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'smoke-mcp', version: '0' } },
  })
  if (init.error) throw new Error('initialize failed: ' + init.error.message)

  const list = await rpc(url, { jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} })
  if (list.error) throw new Error('tools/list failed: ' + list.error.message)
  const tools = list.result?.tools
  if (!Array.isArray(tools) || tools.length === 0) throw new Error('tools/list returned no tools')
  return { serverInfo: init.result?.serverInfo, toolCount: tools.length }
}

const only = process.argv[2]
const targets = only ? { [only]: only } : ENDPOINTS

let failed = 0
for (const [name, url] of Object.entries(targets)) {
  try {
    const { serverInfo, toolCount } = await checkEndpoint(name, url)
    const label = serverInfo ? `${serverInfo.name} v${serverInfo.version}` : name
    console.log(`PASS  ${name.padEnd(20)} ${label} (${toolCount} tools)`)
  } catch (e) {
    failed++
    console.error(`FAIL  ${name.padEnd(20)} ${url}\n        ${e.message}`)
  }
}

if (failed > 0) {
  console.error(`\n${failed} endpoint(s) failed the handshake.`)
  process.exit(1)
}
console.log('\nAll endpoints healthy.')
