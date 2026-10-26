# `forEachWavePipelined/beginPrepareIfNeeded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-transfer.ts` · [Module README](../../../../../modules/core/box/box-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476548-476564](../../../../../../reference/runtime/host-main.cjs#L476548-L476564) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476548-476564](../../../../../../reference/runtime/host-main.cjs#L476548-L476564) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:476548

Calls written directly in this body: `.catch`, `.finally`, `.then`, `items.slice`, `opts.prepareWave`.

Assignment or increment targets: `nextWaveStart`, `prepareInFlight`.

SHA-256 of the source span: `441eb8e59fd3ed55f04b613b33142811462551172c169f544637100bbe23fa33`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
