# Standards Index

This repository indexes structural standards developed by Durgadas (Regis Chapman) that are downstream from or independent of the [Coordination Structural Integrity Suite](https://github.com/coordination-structural-integrity-suite/suite).

These are not part of the suite. They are built on top of it, or alongside it, as the Proof of Coordination protocol's structural work generates new normative instruments for specific coordination problems.

---

## Downstream from the Coordination Structural Integrity Suite

Standards in this category are built on the suite's seven Tensegrity Compressive Standards as their structural backbone. Conformance with the suite is a prerequisite for conformance with any standard listed here.

### The Collegius Standard

[github.com/durgadasji/collegius-standard](https://github.com/durgadasji/collegius-standard)

Structural conditions for a self-curating body of contributors to function as credibly neutral, funder-independent distribution infrastructure for a field of sustained work. The Collegius Standard specifies what a conformant Collegius must have in place: a self-curated membership registry, a distribution invariant, and a thin funder interface, each constitutively load-bearing for the others.

Status: working draft, v0.2.6. General infrastructure any funder or ecosystem can adopt.

---

## Independent standards

Standards in this category are published independently. They share structural grounding with the Coordination Structural Integrity Suite but do not require suite adoption for conformance.

### CROSS+WALKRI

CROSS and WALKRI are companion standards published together under the [cross-walkri](https://github.com/cross-walkri) account. They are designed to be adopted together or independently.

#### CROSS: Common Reporting Outcome Standards Schema

[github.com/cross-walkri/CROSS](https://github.com/cross-walkri/CROSS)

A portable grant obligation standard specifying what funded interventions are obligated to produce. CROSS covers three obligation modes: build obligation (a specified deliverable with falsifiable completion criteria), change obligation (a measurable shift from a named FROM state in a defined population), and retroactive obligation (evidence of prior contribution meeting published threshold criteria). A four-gate architecture (entry specification, progress verification, completion verification, continuation specification) allows funders to configure where evidentiary pressure falls. The full companion document suite includes a grant configurator, grantee dashboard, reviewers dashboard, assessment rubric, worked examples, and Claude skill.

CROSS is published under CC0 and is designed to be adoptable without adopting the Coordination Structural Integrity Suite. It shares structural grounding with four compressive standards (Precision-First Design, Adverse-Signal Engagement Principle Core, Information Asymmetry Classification, and Regenerative Obligation), from which it inherits requirements by reference, with all inherited requirements stated within CROSS itself.

Status: published, v0.2.4. General-purpose infrastructure for grants ecosystems.

#### WALKRI: Working Architecture for Legible, Knowledge-Ready Intake

[github.com/cross-walkri/WALKRI](https://github.com/cross-walkri/WALKRI)

A companion standard to CROSS specifying epistemic quality at the point of capture: how fields and criteria used to collect structured information must be defined so the resulting data is valid, consistent, provenance-aware, and reusable by both humans and machines. WALKRI introduces the Bidirectional Precision Principle: the same operational definition rigor CROSS requires of applicant indicators applies to funders specifying gate criteria and application fields. WALKRI operates on JSON Schema as its native format, sits above form tools (Fillout, Jotform, Typeform, and others) as a pre-publishing quality gate and post-submission enrichment layer, and produces output aligned with Croissant, FAIR, and W3C PROV downstream standards.

WALKRI is published under CC0 and is portable: it works with any obligation standard or none. Together with CROSS it forms the CROSS+WALKRI pair for end-to-end structured intake quality in grants programs.

Status: published, v0.1.0. Companion infrastructure for any program collecting structured intake data.

---

*The Coordination Structural Integrity Suite, from which these standards descend, is maintained at [coordination-structural-integrity-suite.github.io](https://coordination-structural-integrity-suite.github.io).*
