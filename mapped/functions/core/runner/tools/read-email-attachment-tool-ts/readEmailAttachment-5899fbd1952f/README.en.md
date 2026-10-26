# `readEmailAttachment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/read-email-attachment-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/read-email-attachment-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764963-764991](../../../../../../../reference/runtime/host-main.cjs#L764963-L764991) | `FunctionDeclaration` | yes | `deps, args` |
| [evaluation:558331-558359](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558331-L558359) | `FunctionDeclaration` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764963-764991](../../../../../../../reference/runtime/host-main.cjs#L764963-L764991) | 5 | 0 | 2 | 2 | 2 | 0 |
| [evaluation:558331-558359](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558331-L558359) | 5 | 0 | 2 | 2 | 2 | 0 |

### host:764963

Calls written directly in this body: `deps.email.readAttachment`, `deps.getPersistMediaBytes`, `describe3`, `new SandToolInputError`, `persist`, `renderEmailAttachmentSaved`, `renderEmailAttachmentText`, `storedAttachmentName`, `url2.startsWith`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `cab3d35042d0909f98a370a45ef1d02c090f7ca5e8e1a16c08206839aaca8641`.

### evaluation:558331

Calls written directly in this body: `deps.email.readAttachment`, `deps.getPersistMediaBytes`, `describe3`, `new SandToolInputError`, `persist`, `renderEmailAttachmentSaved`, `renderEmailAttachmentText`, `storedAttachmentName`, `url2.startsWith`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `b0ce9ce24270d95eff89cd3e88a634f5c778ffc967f238e35a6e4c33870b8a1c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
