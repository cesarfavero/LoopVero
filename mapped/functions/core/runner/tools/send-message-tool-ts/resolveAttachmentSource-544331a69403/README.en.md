# `resolveAttachmentSource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760631-760668](../../../../../../../reference/runtime/host-main.cjs#L760631-L760668) | `FunctionDeclaration` | yes | `ctx, sourceUrl, deps` |
| [evaluation:551446-551483](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551446-L551483) | `FunctionDeclaration` | yes | `ctx, sourceUrl, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760631-760668](../../../../../../../reference/runtime/host-main.cjs#L760631-L760668) | 11 | 0 | 3 | 5 | 5 | 1 |
| [evaluation:551446-551483](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551446-L551483) | 11 | 0 | 3 | 5 | 5 | 1 |

### host:760631

Calls written directly in this body: `deps.getIngestAttachment`, `deps.resolveBoxAttachment`, `deps.storeAttachments.resolve`, `filePathFromFileUrl`, `ingest`, `missingAttachmentMessage`, `new SandToolInputError`, `resolved`, `storedAttachmentSource`, `tooLargeAttachmentMessage`.

Assignment or increment targets: `ingestError`.

Explicit throw targets: `SandToolInputError`, `error64`.

SHA-256 of the source span: `994166bd33aae89c37c1814eb7f7582987ff86290cc6b434ab6f3afc555e7f70`.

### evaluation:551446

Calls written directly in this body: `deps.getIngestAttachment`, `deps.resolveBoxAttachment`, `deps.storeAttachments.resolve`, `filePathFromFileUrl`, `ingest`, `missingAttachmentMessage`, `new SandToolInputError`, `resolved`, `storedAttachmentSource`, `tooLargeAttachmentMessage`.

Assignment or increment targets: `ingestError`.

Explicit throw targets: `SandToolInputError`, `error63`.

SHA-256 of the source span: `2524d371a27178a283816dc90d8fbaf6f4c31c490f57fc5b93e9a5313712db35`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
