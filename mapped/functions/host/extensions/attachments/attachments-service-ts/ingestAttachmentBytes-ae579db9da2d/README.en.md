# `ingestAttachmentBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498616-498633](../../../../../../../reference/runtime/host-main.cjs#L498616-L498633) | `FunctionDeclaration` | yes | `agentDir, filename, data2, storeSized = false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498616-498633](../../../../../../../reference/runtime/host-main.cjs#L498616-L498633) | 4 | 0 | 1 | 1 | 3 | 0 |

### host:498616

Calls written directly in this body: `Buffer.from`, `attachmentByteLimitForName`, `contentAddressedPath`, `filename.trim`, `getAgentAttachmentsDir`, `new AttachmentTooLargeError`, `new SandAttachmentError`, `sha256Hex`, `storeAttachmentByteLimitForName`, `writeContentAddressedFile`.

Explicit throw targets: `AttachmentTooLargeError`, `SandAttachmentError`.

SHA-256 of the source span: `60bf48e9a5cbeb2fe3bc7a5c0d08c424626c35e2c5cb21d3a489dfe42deeac44`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
