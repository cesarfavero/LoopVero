# `createAttachmentsService/readChunk`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499143-499162](../../../../../../../reference/runtime/host-main.cjs#L499143-L499162) | `FunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499143-499162](../../../../../../../reference/runtime/host-main.cjs#L499143-L499162) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:499143

Calls written directly in this body: `deps.report`, `readHostAttachmentChunk`, `refuseUnlessAgentOnHost`, `resolveReadAgentDir`.

SHA-256 of the source span: `b6b8d012f7efdbe131f3c14624a6d008f27d149e19ffe0b9fec35d0f6af1e743`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
