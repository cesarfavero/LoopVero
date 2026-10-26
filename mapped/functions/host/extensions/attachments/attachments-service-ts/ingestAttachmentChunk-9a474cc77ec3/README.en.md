# `ingestAttachmentChunk`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498649-498690](../../../../../../../reference/runtime/host-main.cjs#L498649-L498690) | `FunctionDeclaration` | yes | `agentDir, chunk` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498649-498690](../../../../../../../reference/runtime/host-main.cjs#L498649-L498690) | 9 | 0 | 3 | 2 | 5 | 0 |

### host:498649

Calls written directly in this body: `Number.isInteger`, `UPLOAD_ID.test`, `attachmentByteLimitForName`, `contentAddressedPath`, `ensureSandDataDirSync`, `filename.trim`, `getAgentAttachmentsDir`, `new AttachmentTooLargeError`, `new SandAttachmentError`, `openSandDataFileSync`, `renameSandDataFileSync`, `sha256OfFd`, `storeAttachmentByteLimitForName`, `sweepStaleUploadParts`, `writeAt`.

Assignment or increment targets: `hash2`.

Explicit throw targets: `AttachmentTooLargeError`, `SandAttachmentError`.

SHA-256 of the source span: `4b9366dd1601d8351385a10c6fa7aefc3c6e079b0702c99bee23902f08c82151`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
