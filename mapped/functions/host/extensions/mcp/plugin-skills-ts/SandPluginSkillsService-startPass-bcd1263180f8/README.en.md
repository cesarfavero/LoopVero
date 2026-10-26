# `SandPluginSkillsService.startPass`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/plugin-skills.ts` · [Module README](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702008-702016](../../../../../../../reference/runtime/host-main.cjs#L702008-L702016) | `method` | no | `trigger2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702008-702016](../../../../../../../reference/runtime/host-main.cjs#L702008-L702016) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:702008

Calls written directly in this body: `pass.then`, `this.runPass`.

Assignment or increment targets: `this.inFlight`.

SHA-256 of the source span: `7d1a0bd08269b003985c1d9bb87460bd1a26bf289d7300b5af989313f64ce900`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
