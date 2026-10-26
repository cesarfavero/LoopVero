# `realAttachmentTextPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499041-499056](../../../../../../../reference/runtime/host-main.cjs#L499041-L499056) | `FunctionDeclaration` | yes | `agentDir, filePath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499041-499056](../../../../../../../reference/runtime/host-main.cjs#L499041-L499056) | 5 | 0 | 3 | 3 | 1 | 0 |

### host:499041

Calls written directly in this body: `lexicalBoxFilePath`, `new AttachmentOutsideRootError`, `previewClaimsCloudAgentArtifact`, `realHostAttachmentPath`, `reanchorHostPath`, `resolvePreviewBoxFile`, `resolveScopedAttachmentPath`.

Explicit throw targets: `AttachmentOutsideRootError`.

SHA-256 of the source span: `7753b21e8376947aadd14162fcb1d92d7bc80e4833f3c2855f4c9955da681d46`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
