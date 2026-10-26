# `loadCloudAgentAttachments`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-images.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-images-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567346-567426](../../../../../../reference/runtime/sand-eval-runner.cjs#L567346-L567426) | `FunctionDeclaration` | yes | `{   ctx,   imageUrls,   fileUrls,   agentDir,   readBoxFile }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567346-567426](../../../../../../reference/runtime/sand-eval-runner.cjs#L567346-L567426) | 13 | 2 | 1 | 9 | 0 | 0 |

### evaluation:567346

Calls written directly in this body: `Math.min`, `byteLimitFor`, `classifyAttachment2`, `envFileRefusedMessage`, `filePathFromFileUrl`, `files.push`, `formatCloudAgentAttachmentTooLargeNotice`, `formatCloudAgentAttachmentsOverTotalNotice`, `getAgentMediaStoreRoots`, `images.push`, `import_node_path37.posix.basename`, `isEnvFileName`, `looksLikeBinary`, `normalizedBoxPathFromFileUrl`, `notFileUrlMessage`, `readCloudAgentAttachment`, `refusedMessage`, `unreadableMessage`, `unsupportedTypeMessage`.

Assignment or increment targets: `totalBytes`.

SHA-256 of the source span: `31e8e35c22dea217c16597ea2c3fedb1cdef8a534375aee67e020746f320511f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
