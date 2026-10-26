# `createAttachmentsService/uploadChunk`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499118-499128](../../../../../../../reference/runtime/host-main.cjs#L499118-L499128) | `FunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499118-499128](../../../../../../../reference/runtime/host-main.cjs#L499118-L499128) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:499118

Calls written directly in this body: `Buffer.from`, `ingestAttachmentChunk`, `resolveRequestedAgentDir`.

SHA-256 of the source span: `2d30d36ecd91908c3cf3601b215be35d85e1287ceb87a78146b741b16c19d007`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
