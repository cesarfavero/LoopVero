# `forEachWavePipelined/worker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-transfer.ts` · [Module README](../../../../../modules/core/box/box-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476565-476587](../../../../../../reference/runtime/host-main.cjs#L476565-L476587) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476565-476587](../../../../../../reference/runtime/host-main.cjs#L476565-L476587) | 5 | 1 | 2 | 4 | 0 | 1 |

### host:476565

Calls written directly in this body: `beginPrepareIfNeeded`, `new Promise`, `opts.process`, `queue.splice`, `wakeAll`.

Assignment or increment targets: `failed2`, `failure3`.

SHA-256 of the source span: `4371305c4a92c3c4da67f1db7e582340068ccfe424a6d0cdcfcb1f021514a2c4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
