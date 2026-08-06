# Standards Index

This repository is the public index of the structural standards work developed by Durgadas (Regis Chapman) in the course of building the Proof of Coordination protocol, together with the related public material: the companion document suites, the prompts and skills, and the sites. It lists what each item is, where it lives, and its current status.

Everything indexed here is published under open licenses and is adoptable on its own terms.

The shape, in brief: one meta-standard (CRAFT) operates on standards themselves, with ORE and STRUCK as its companion specifications at the ingestion and exit boundaries; the Coordination Structural Integrity Suite is the ten-standard structural backbone; the grants domain adds CROSS, WALKRI, and GRAIN; Dimensional Frame Language is the vocabulary substrate beneath all of it. CRAFT, ORE, STRUCK, and WALKRI work across domains; CROSS and GRAIN are the grants pair.

---

## The meta-standard

### CRAFT

[github.com/CrossWalkri/craft-meta-standard](https://github.com/CrossWalkri/craft-meta-standard)

The meta-standard for making a standard falsifiable and legible: six conditions a standard must satisfy to be checkable by an independent reader, plus the construction grammar for applying them to a domain. Its object is a standard as such, which is what makes it the one meta-standard rather than one more domain standard. Published specification.

### ORE: Origin, Reliability, Exposure

[github.com/CrossWalkri/ORE](https://github.com/CrossWalkri/ORE)

CRAFT's companion specification at the ingestion boundary: what an evaluation chain is allowed to assume about the sources feeding it. ORE grades sources as uncertainty rather than judging them as quality (how much of a source's reliability can currently be seen, and what is being trusted that cannot be seen), requires the intake posture to be declared and enforced, and makes every output expose the grade profile of the sources it rests on, so nothing is silently laundered into a downstream judgment. As of CRAFT v0.4.4, a chain that ingests material it did not create satisfies CRAFT's ingestion boundary declaration by adopting ORE or by declaring equivalent obligations; a condition-by-condition map of where ORE attaches to CRAFT's six conditions ships in the ORE repository. Not a domain application: a companion, independently adoptable. Published under CC0.

### STRUCK: the exit-boundary standard

[github.com/CrossWalkri/STRUCK](https://github.com/CrossWalkri/STRUCK)

CRAFT's companion specification at the exit boundary, the mirror of ORE: where ORE covers what a chain may assume about the sources entering it, STRUCK covers what an output owes on the way out. It specifies the five obligations any evidence-grade output must carry on its face, so the party receiving it can do more than take it or leave it: support graded per dimension with the weakest assessment exposed, the chain traced to ultimate origin with every rung labeled for what it is, refutation conditions stated in terms of what could be found in the world, contested regions kept rather than averaged into a central value, and the worth-judgment left to the consumer with what they need to make it. Conformance is assessable from the output alone. STRUCK expands as Support graded, Traced to origin, Refutation stated, Unjudged worth, Contest kept, Known on its face. It inherits ORE and CRAFT by reference and is independently adoptable: ORE and STRUCK bracket any process, with or without CRAFT in the middle. Published under CC0.

---

## The Coordination Structural Integrity Suite

[coordination-structural-integrity-suite.github.io](https://coordination-structural-integrity-suite.github.io/ai/)

Ten standards specifying the structural conditions under which a coordination system holds its integrity under pressure. Seven compressive (floors that must not be crossed), three generative (capacities that must be present).

**Seven Tensegrity Compressive Standards:** Precision-First Design (the keystone, holding precision and non-harming as one commitment), Adverse-Signal Engagement Principle Core, Structural Consent Legibility, Information Asymmetry Classification, Structural Power Obligation, Regenerative Obligation, and Coordination Scaling.

**Three Tensegrity Generative Standards:** Sensemaking, Four Batteries Capacity, and Conflict Transformation.

The suite ships with more than its standards. Suite-level documents (Tensegrity Architecture, the Suite Integration Guide, the Suite Structural Patterns Primer, the Suite Deployment Contexts) orient adopters across the whole. A paste-and-go AI prompt for every standard, plus suite-wide audit and triage prompts, lets any AI assistant run an assessment. Per-standard Claude skills carry the reasoning frame for extended work. A one-page AI prompt launcher gives access to every prompt in one place.

---

## The grants domain

### CROSS: Common Reporting Outcome Standards Schema

[github.com/CrossWalkri/CROSS](https://github.com/CrossWalkri/CROSS)

A portable grant obligation standard specifying what funded interventions are obligated to produce: three obligation modes (build, change, retroactive) and a four-gate architecture (entry specification, progress verification, completion verification, continuation specification) that lets funders configure where evidentiary pressure falls. CROSS shares structural grounding with four compressive standards and states every inherited requirement within itself, so it is adoptable without adopting the full suite. Published under CC0.

Its companion suite is substantial: the canonical round-configuration schema with guidance, rubric, templates, and worked examples; a grant configurator; grantee and reviewer dashboards; runbooks; and a Claude skill with a Theory-of-Change builder.

### WALKRI: Working Architecture for Legible, Knowable, Reliable Instrumentation

[github.com/CrossWalkri/WALKRI](https://github.com/CrossWalkri/WALKRI)

A companion standard specifying epistemic quality at the point of data capture. Its unit is the instrument: any single point where structured data is captured, whether a form field, an AI prompt constraint, a structured-output schema element, a rubric item, or an extraction specification. WALKRI specifies how each instrument must be defined so the data it produces is valid, consistent, provenance-aware, and reusable. It carries the Bidirectional Precision Principle, operates on JSON Schema above any one capture tool, and produces output aligned with Croissant, FAIR, and W3C PROV. Published under CC0.

Its companion suite includes the standard, guidance, rubric, templates, worked examples, an interface specification, runbooks, and a scope document.

### GRAIN: the grants descriptive grammar

[github.com/CrossWalkri/GRAIN](https://github.com/CrossWalkri/GRAIN)

The descriptive grammar underneath the grants pair: the shared primitives a grant program is built from, independent of any one standard's requirements. Its core is a foundation of primitives published as GRAIN-FOUNDATION, with a framework index and the public derivation. GRAIN is to CROSS as a grammar is to a usage rule: CROSS says what must be produced, GRAIN names the parts the saying is built from. Foundation in preparation for publication. Published under CC0.

---

## The substrate

### Dimensional Frame Language (Frame Language)

Published as a Suite document: [Frame Language Foundational Vocabulary Specification](https://github.com/coordination-structural-integrity-suite/suite/blob/main/tensegrity-suite/overview/frame-language-foundational-vocabulary-specification-1_0_0.md)

Not a standard and not a domain instrument: the vocabulary discipline the whole body rests on. Dimensional Frame Language supplies the canonical terms a standard must use to carry its meaning intact, and the decomposition method for reaching them. Published vocabulary specification.

---

## Sites and tools

- The CROSS+WALKRI builder, a working reference implementation that configures conformant rounds and theory-of-change pathways: [crosswalkri-builder.vercel.app](https://crosswalkri-builder.vercel.app)
- The Coordination Structural Integrity Suite site: [coordination-structural-integrity-suite.github.io](https://coordination-structural-integrity-suite.github.io/ai/)
- The Dimensional Frame Language analyzer, a live browser tool that flags terms carrying unearned weight and offers the plain replacement: [framelanguage.regischapman.com](https://framelanguage.regischapman.com)
- The Precision Toolkit for AI (PT4AI), a published workbench for AI-assisted evaluation built on these standards: [precision.regischapman.com](https://precision.regischapman.com)
- The Precision Council for AI (PC4AI), a multi-evaluator adversarial review council with independent evaluators and a synthesis chair: [precision-council.regischapman.com](https://precision-council.regischapman.com)

Three MCP servers put the standards directly inside any AI assistant: the CSIS server and the Dimensional Frame Language server at [github.com/coordination-structural-integrity-suite/tools](https://github.com/coordination-structural-integrity-suite/tools), and the CROSS+WALKRI server at [github.com/CrossWalkri/tools](https://github.com/CrossWalkri/tools).

---

*These standards descend from or sit alongside the Coordination Structural Integrity Suite, maintained at [coordination-structural-integrity-suite.github.io](https://coordination-structural-integrity-suite.github.io/ai/).*
