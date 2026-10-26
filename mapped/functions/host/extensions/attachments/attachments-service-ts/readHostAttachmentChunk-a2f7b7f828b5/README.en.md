# `readHostAttachmentChunk`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/attachments-service.ts` · [Module README](../../../../../../modules/host/extensions/attachments/attachments-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498817-498850](../../../../../../../reference/runtime/host-main.cjs#L498817-L498850) | `FunctionDeclaration` | yes | `agentDir, filePath, offset2, length, videoPlayback = false, reportRenditionFailure = () => { }, hold = holdAttachmentFile` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498817-498850](../../../../../../../reference/runtime/host-main.cjs#L498817-L498850) | 6 | 0 | 4 | 5 | 1 | 1 |

### host:498817

Calls written directly in this body: `getAgentAssetsDir`, `getAgentAttachmentsDir`, `hold`, `isCloudAgentArtifactPath`, `isPathWithin`, `new AttachmentOutsideRootError`, `realHostAttachmentPath`, `reanchorHostPath`, `resolvePreviewBoxFile`, `rethrowRefusal`, `videoMimeFromPath`.

Explicit throw targets: `AttachmentOutsideRootError`.

SHA-256 of the source span: `a9aa53297fec55863813a8c97c2254a8c3494b40aedbf0703878c7248439097e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
