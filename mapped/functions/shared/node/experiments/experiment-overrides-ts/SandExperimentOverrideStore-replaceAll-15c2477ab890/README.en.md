# `SandExperimentOverrideStore.replaceAll`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/experiment-overrides.ts` · [Module README](../../../../../../modules/shared/node/experiments/experiment-overrides-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552078-552083](../../../../../../../reference/runtime/host-main.cjs#L552078-L552083) | `method` | no | `overrides` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552078-552083](../../../../../../../reference/runtime/host-main.cjs#L552078-L552083) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:552078

Calls written directly in this body: `Object.entries`, `this.isExperimentName`, `this.overrides.clear`, `this.overrides.set`.

SHA-256 of the source span: `d0edef55b03cdbb63fbe6c93dfb344f78baff9b449bf3db190b56450663eb3b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
