# `SandSessionMaterialization.enqueueMint`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-materialization.ts` · [Module README](../../../../../../modules/host/extensions/session/session-materialization-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721416-721428](../../../../../../../reference/runtime/host-main.cjs#L721416-L721428) | `method` | no | `run` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721416-721428](../../../../../../../reference/runtime/host-main.cjs#L721416-L721428) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:721416

Calls written directly in this body: `invariant`, `next.then`, `this.mintChain.then`, `this.mintInFlight.getStore`.

Assignment or increment targets: `this.mintChain`.

SHA-256 of the source span: `82691ab18c7af0e3ba976588a12b29d0629109a7d8c86923a5246ab39686b3a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
