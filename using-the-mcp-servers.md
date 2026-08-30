# Using the MCP servers

Four of the standards ship as MCP servers: running tools an AI assistant can call directly, so the discipline runs on the work in front of you instead of living in a document you read and apply by hand. This page is the single place that says how to connect them, every way they can be reached. Every command here has been run against the live servers.

## The four servers

| Server | What it exposes | Hosted endpoint |
|--------|-----------------|-----------------|
| evidence-integrity | CROSS gate checking and round configuration, WALKRI field auditing, and ORE source grading | `https://proof-of-coordevidence-integrity-production.up.railway.app/mcp` |
| CSIS | Standards lookup, corollary audit, structural-pattern and descriptive-class resolution, and the inheritance graph | `https://csis-production.up.railway.app/mcp` |
| Frame Language | Watchlist checks, admissibility cases, Frame 2 functioning checks, and text auditing | `https://frame-language-production.up.railway.app/mcp` |
| DS4AI | Conformance auditing of a web surface across the invisible-correctness axes, plus head, markup, and palette generators | `https://ds4ai-production.up.railway.app/mcp` |

## Four ways to connect

Each server can be reached four ways. The hosted endpoint is the simplest, with nothing to install. The other three run the server on your own machine over stdio, from a published package or a local clone. All four expose the identical tools; they differ only in where the server runs.

### 1. Hosted (no install)

Point any MCP client at the hosted HTTP endpoint. In a client that uses an `mcpServers` configuration block (for example Claude Desktop's `claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "evidence-integrity": { "type": "http", "url": "https://proof-of-coordevidence-integrity-production.up.railway.app/mcp" },
    "csis":               { "type": "http", "url": "https://csis-production.up.railway.app/mcp" },
    "frame-language":     { "type": "http", "url": "https://frame-language-production.up.railway.app/mcp" },
    "ds4ai":              { "type": "http", "url": "https://ds4ai-production.up.railway.app/mcp" }
  }
}
```

In Claude Code:

```
claude mcp add --transport http csis https://csis-production.up.railway.app/mcp
```

### 2. From npm (runs locally, no clone)

Run the published npm package as a local stdio server. `npx` fetches and runs it; no clone and no build:

```json
{ "mcpServers": { "csis": { "command": "npx", "args": ["-y", "@proof-of-coord/structural-integrity"] } } }
```

In Claude Code:

```
claude mcp add csis -- npx -y @proof-of-coord/structural-integrity
```

### 3. From JSR (runs locally with Deno)

Run the JSR package with Deno:

```json
{ "mcpServers": { "csis": { "command": "deno", "args": ["run", "-A", "jsr:@proof-of-coord/structural-integrity"] } } }
```

In Claude Code:

```
claude mcp add csis -- deno run -A jsr:@proof-of-coord/structural-integrity
```

### 4. From a local clone (fully offline, or for development)

Clone the repository and point the client at the bundled server file:

```json
{ "mcpServers": { "csis": { "command": "node", "args": ["/absolute/path/to/tools/csis-server.mjs"] } } }
```

## Per-server coordinates

Substitute the server's own values into any of the four methods above.

| Server | npm package | JSR package | Local bundle (after cloning its repo) |
|--------|-------------|-------------|----------------------------------------|
| evidence-integrity | `@proof-of-coord/evidence-integrity` | `jsr:@proof-of-coord/evidence-integrity` | `CrossWalkri/tools` → `node server.mjs` |
| CSIS | `@proof-of-coord/structural-integrity` | `jsr:@proof-of-coord/structural-integrity` | `coordination-structural-integrity-suite/tools` → `node csis-server.mjs` |
| Frame Language | `@proof-of-coord/frame-language` | `jsr:@proof-of-coord/frame-language` | `coordination-structural-integrity-suite/tools` → `node frame-language-server.mjs` |
| DS4AI | `@polymathie/ds4ai` | `jsr:@polymathie/ds4ai` | `Polymathie-Studio/ds4ai-mcp` → `npm ci && npm run build` → `node dist/index.js` |

The hosted endpoints are in the table at the top of this page.

## The library, not a server

`@proof-of-coord/evidence-core` is a library, not an MCP server. It is the typed schemas and audit logic that the evidence-integrity server is built on, published for code that wants to use them directly:

```
npm install @proof-of-coord/evidence-core
# or, with Deno:
deno add jsr:@proof-of-coord/evidence-core
```

Do not point an MCP client at it. To reach these tools from an assistant, connect to the evidence-integrity server instead.

## Which method should I use?

- To use it inside your assistant with the least setup: the hosted endpoint (method 1).
- To run it locally without cloning anything: npm (method 2) or JSR (method 3).
- To develop against the source, or to run it fully offline: a local clone (method 4).

## Requirements

- npm method: Node.js (a recent LTS). `npx` ships with npm.
- JSR method: Deno.
- Local clone: Node.js, plus the repository's own build step where noted.
- Hosted method: nothing beyond an MCP client.
