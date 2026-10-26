# `statsigClientPort/initializeSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552555-552561](../../../../../../../reference/runtime/host-main.cjs#L552555-L552561) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552555-552561](../../../../../../../reference/runtime/host-main.cjs#L552555-L552561) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:552555

Calls written directly in this body: `areJsonValuesEqual`, `client.getContext`, `client.initializeSync`, `invariant`.

Assignment or increment targets: `stagedValues`.

SHA-256 of the source span: `989b01e070c9ffbbf84df29e1f2cf2eaf0bc97dbe07ce60d57bfc7f30717ad3a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
