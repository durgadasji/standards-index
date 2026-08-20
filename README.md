# Standards Index

This is the public index of the standards developed by Durgadas (Regis Chapman): what each one is, where to read it, and where it is applied. It is organized the way the standards site presents them, at **[integritysuite.org](https://integritysuite.org)**.

The frame, in brief: any decision that matters has to hold up on several sides at once, structure, evidence, reasoning, meaning, and time, and the most expensive failures are on the side no one checked. Each standard makes one of those sides something you can show instead of something you ask people to take on trust. Two of the standards are meta-standards, standards about standards: the Precision-First Design Standard is the keystone the structural suite is built on, and CRAFT is the meta-standard for any evaluation chain, with ORE and STRUCK as its boundary companions. Everything else is a domain standard or the vocabulary substrate they all rest on.

Everything indexed here is published under open licenses and is adoptable on its own terms. Most now ship a machine-readable conformance layer alongside the prose, the schema an automated adopter validates against, generated from a single source so it cannot silently fall behind the standard.

---

## The evaluation meta-standard

CRAFT operates on standards themselves, making any evaluation standard checkable by an independent reader, with its two boundary companions at the edges of the chain.

### CRAFT

The meta-standard for making a standard falsifiable and legible: six conditions a standard must satisfy to be checkable by an independent reader, plus the grammar for applying them to a domain. Its object is a standard as such, which is what makes it the one meta-standard rather than another domain standard.

[Read it on integritysuite.org](https://integritysuite.org/standards/craft) · [Specification](https://github.com/CrossWalkri/craft-meta-standard)

### ORE

Origin, Reliability, Exposure. The ingestion boundary: what an evaluation chain is allowed to assume about the sources feeding it. Sources are graded as uncertainty rather than judged as quality, and every output exposes the grade profile of what it rests on, so nothing shaky is quietly laundered into a confident conclusion. A companion, independently adoptable.

[Read it on integritysuite.org](https://integritysuite.org/standards/ore) · [Specification](https://github.com/CrossWalkri/ORE)

### STRUCK

The exit boundary, the mirror of ORE: what an output owes on the way out. Five obligations any evidence-grade result must carry on its face, so the party receiving it can assess it from the output alone. Support graded, Traced to origin, Refutation stated, Unjudged worth, Contest kept, Known on its face. ORE and STRUCK bracket any process, with or without CRAFT in the middle.

[Read it on integritysuite.org](https://integritysuite.org/standards/struck) · [Specification](https://github.com/CrossWalkri/STRUCK)

---

## Structural Integrity

The keystone meta-standard and the ten-standard suite built on it: the conditions under which a coordination system holds together under pressure.

### Precision-First Design Standard (PFDS)

The keystone of the suite, holding precision and non-harming as one commitment. Every other structural standard is a precise specification of what that commitment requires in one coordination domain, which is what makes this the meta-standard the rest of the suite rests on.

[Read the suite](https://coordination-structural-integrity-suite.github.io/ai/)

### Coordination Structural Integrity Suite (CSIS)

Ten standards specifying the structural conditions a coordination system must hold to. Seven are floors that must not be crossed, three are capacities that must be present. The suite ships with integration guides, patterns, paste-and-go AI prompts, and per-standard skills.

[Read the suite](https://coordination-structural-integrity-suite.github.io/ai/)

---

## The grants domain

What funded work is obligated to produce, how each data point is captured, and the grammar underneath both. This is the first domain the cross-domain standards were applied to; it lives as a working site at [crosswalkri.com](https://crosswalkri.com).

### CROSS

Common Reporting Outcome Standards Schema. A portable grant obligation standard: three obligation modes and a four-gate architecture that lets funders configure where the evidentiary pressure falls. Adoptable without adopting the full suite, because it states every inherited requirement within itself.

[Specification](https://github.com/CrossWalkri/CROSS) · [In practice](https://crosswalkri.com)

### WALKRI

Working Architecture for Legible, Knowable, Reliable Instrumentation. Epistemic quality at the point of data capture. Its unit is the instrument: any single place structured data is captured, a form field, a prompt constraint, a structured-output schema element, a rubric item. It specifies how each instrument must be defined so the data it produces is valid, consistent, provenance-aware, and reusable. A cross-domain standard, first applied in grants.

[Read it on integritysuite.org](https://integritysuite.org/standards/walkri) · [Specification](https://github.com/CrossWalkri/WALKRI) · [In grants](https://crosswalkri.com)

### GRAIN

The descriptive grammar underneath the grants pair: the shared primitives a grant program is built from, independent of any one standard's requirements. GRAIN is to CROSS as a grammar is to a usage rule, naming the parts the requirements are built from. Foundation in preparation for publication.

[Specification](https://github.com/CrossWalkri/GRAIN)

---

## Meaning Integrity

The vocabulary discipline the whole body rests on.

### Dimensional Frame Language

Not a standard and not a domain instrument, but the substrate beneath all of them: the canonical terms a standard must use to carry its meaning intact, and the method for reaching them. It is what keeps a word from quietly meaning less than the check that rests on it.

[Read it on integritysuite.org](https://integritysuite.org/meaning) · [Specification](https://github.com/coordination-structural-integrity-suite/suite/blob/main/tensegrity-suite/overview/frame-language-foundational-vocabulary-specification-1_0_0.md)

---

## Temporal Integrity

The fifth side, time: whether what was sound when it was made still holds at the moment it is used, not only when it was produced. Now in candidate form as two parts, a notation for a chain's temporal profile and the standard that judges it against the moment a stale reading drives a consequence that cannot be undone. Both are Standards Candidates, not yet promoted and not conformance gates.

### TRAINS (Candidate)

Temporal Representation And Interchange Notation. The notation layer: a domain-neutral way to write down a chain's temporal profile, how fast it acts, how quickly its readings go stale, whether and for how long its actions can be undone, its cadence, and what its claims say about time. It represents and renders no verdict, the temporal sibling of GRAIN.

### TIMES (Candidate)

Temporal Integrity Measurement and Evaluation. The judging layer: it reads a profile written in TRAINS and evaluates it against the corners where a reading correct at its source is consumed after it has gone stale, the failure a point-of-entry check never reaches. TIMES is to TRAINS as a judge is to a representation.

---

## Developer and independent standards

Standards that stand on their own, independent of the coordination work above, and used across the sites and tools.

### TEMPER

A semantic color system: five appearance modes on one token schema, with every color solved to a contrast floor by the engine rather than chosen by eye. It is what themes integritysuite.org, and it adopts onto any site as one CSS file and a small mode switcher.

[Specification and source](https://github.com/durgadasji/temper)

### Precision for AI (P4AI)

An operating discipline for working with an AI model: the practices for keeping AI-assisted work precise and checkable rather than taken on the model's word. The Precision Toolkit (PT4AI) and Precision Council (PC4AI) in the tools below are what apply it.

[Source](https://github.com/durgadasji/p4ai)

---

## Sites and tools

- The standards site, the front for the whole body: [integritysuite.org](https://integritysuite.org)
- The grants site, where CROSS, WALKRI, and GRAIN are applied to a funding round: [crosswalkri.com](https://crosswalkri.com)
- The Coordination Structural Integrity Suite site: [coordination-structural-integrity-suite.github.io](https://coordination-structural-integrity-suite.github.io/ai/)
- The CROSS+WALKRI builder, a working reference implementation that configures conformant rounds and theory-of-change pathways: [crosswalkri-builder.vercel.app](https://crosswalkri-builder.vercel.app)
- The Dimensional Frame Language analyzer, a live browser tool that flags terms carrying unearned weight and offers the plain replacement: [framelanguage.regischapman.com](https://framelanguage.regischapman.com)
- The Precision Toolkit for AI (PT4AI), a published workbench for AI-assisted evaluation built on these standards: [precision.regischapman.com](https://precision.regischapman.com)
- The Precision Council for AI (PC4AI), a multi-evaluator adversarial review council with independent evaluators and a synthesis chair: [precision-council.regischapman.com](https://precision-council.regischapman.com)

Three MCP servers put the standards directly inside any AI assistant: the CSIS server and the Dimensional Frame Language server at [github.com/coordination-structural-integrity-suite/tools](https://github.com/coordination-structural-integrity-suite/tools), and the CROSS+WALKRI server at [github.com/CrossWalkri/tools](https://github.com/CrossWalkri/tools).
