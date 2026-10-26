# `createAttachmentsService/resolveReadAgentDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499101-499101](../../../../../../../reference/runtime/host-main.cjs#L499101-L499101) | `ArrowFunctionExpression` | no | `path33, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499101-499101](../../../../../../../reference/runtime/host-main.cjs#L499101-L499101) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:499101 uses an implicit arrow-function return.

### host:499101

Calls written directly in this body: `resolveAttachmentOwnerDir`, `tryResolveRequestedAgentDir`.

SHA-256 of the source span: `230d0f271c7c71a110c22f8fc3ed759dc55216fef42e7dd92f74f683d176ad63`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
