# `forEachWavePipelined/wakeAll`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-transfer.ts` · [Module README](../../../../../modules/core/box/box-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476543-476547](../../../../../../reference/runtime/host-main.cjs#L476543-L476547) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476543-476547](../../../../../../reference/runtime/host-main.cjs#L476543-L476547) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:476543

Calls written directly in this body: `wake`.

Assignment or increment targets: `wakeWaiters`.

SHA-256 of the source span: `5f795c423a6b6158d9a9faf75866b7b719910b19d6b3a713340f700805637288`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
