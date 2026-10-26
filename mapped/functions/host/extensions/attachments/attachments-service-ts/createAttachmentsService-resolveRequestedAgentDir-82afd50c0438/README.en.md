# `createAttachmentsService/resolveRequestedAgentDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499087-499093](../../../../../../../reference/runtime/host-main.cjs#L499087-L499093) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499087-499093](../../../../../../../reference/runtime/host-main.cjs#L499087-L499093) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:499087

Calls written directly in this body: `new SandAttachmentError`, `resolveSandAgentDir`.

Explicit throw targets: `SandAttachmentError`.

SHA-256 of the source span: `4ce405ad2b951f0660deecccdc9a1b5fb6c51ade996a1ee38e166ba04064c400`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
