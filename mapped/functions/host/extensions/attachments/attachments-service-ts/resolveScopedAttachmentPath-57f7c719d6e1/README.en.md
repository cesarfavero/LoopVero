# `resolveScopedAttachmentPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499015-499020](../../../../../../../reference/runtime/host-main.cjs#L499015-L499020) | `FunctionDeclaration` | no | `agentDir, filePath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499015-499020](../../../../../../../reference/runtime/host-main.cjs#L499015-L499020) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:499015

Calls written directly in this body: `getAgentAssetsDir`, `getAgentAttachmentsDir`, `isPathWithin`, `reanchorHostPath`.

SHA-256 of the source span: `c5aa765d6a861b9d6c263878506af6ea7d93819b775c1537f28f46d64127f1f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
