# `cacheBlobReads`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-recovery.ts` · [Module README](../../../../../../modules/host/extensions/session/session-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720032-720055](../../../../../../../reference/runtime/host-main.cjs#L720032-L720055) | `FunctionDeclaration` | no | `blobStore` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720032-720055](../../../../../../../reference/runtime/host-main.cjs#L720032-L720055) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:720032

Calls written directly in this body: `new Map`.

SHA-256 of the source span: `24d61f8cabcfc14db5f265fe40216b061239322978ce126963eafa4979ad8d6a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
