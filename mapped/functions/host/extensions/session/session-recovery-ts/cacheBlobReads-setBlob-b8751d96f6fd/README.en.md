# `cacheBlobReads/setBlob`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-recovery.ts` · [Module README](../../../../../../modules/host/extensions/session/session-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720043-720046](../../../../../../../reference/runtime/host-main.cjs#L720043-L720046) | `FunctionExpression` | no | `ctx, blobId, blobData` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720043-720046](../../../../../../../reference/runtime/host-main.cjs#L720043-L720046) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:720043

Calls written directly in this body: `Promise.resolve`, `blobStore.setBlob`, `reads.set`, `toHex3`.

SHA-256 of the source span: `a4a6e317c0a1c4720c381832b5f96e66a6720a16ca15962ba4b63344983eb48d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
