# `statsigClientPort/updateUserSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552562-552572](../../../../../../../reference/runtime/host-main.cjs#L552562-L552572) | `ArrowFunctionExpression` | no | `user` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552562-552572](../../../../../../../reference/runtime/host-main.cjs#L552562-L552572) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:552562

Calls written directly in this body: `areJsonValuesEqual`, `client.getContext`, `client.initializeSync`, `client.updateUserSync`, `invariant`.

Assignment or increment targets: `stagedValues`.

SHA-256 of the source span: `c0212d1f82cc5d97492cc917252629d3fc40120a88531a19cbeda271c98cd847`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
