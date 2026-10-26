# `statsigClientPort/setData`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552546-552553](../../../../../../../reference/runtime/host-main.cjs#L552546-L552553) | `ArrowFunctionExpression` | no | `{ config: config2, values, user }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552546-552553](../../../../../../../reference/runtime/host-main.cjs#L552546-L552553) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:552546

Calls written directly in this body: `client.dataAdapter.getDataSync`, `client.dataAdapter.setData`, `invariant`.

Assignment or increment targets: `stagedValues`.

SHA-256 of the source span: `2936a3e1c12345d510a405649596bc7abaf865c152e32857259ff165159ee590`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
