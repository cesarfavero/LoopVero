# `cloudAgentArtifactCitation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/cloud-agent-artifact-citation.ts` · [Module README](../../../../../modules/shared/agents/cloud-agent-artifact-citation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508147-508156](../../../../../../reference/runtime/host-main.cjs#L508147-L508156) | `FunctionDeclaration` | no | `source` |
| [evaluation:490259-490268](../../../../../../reference/runtime/sand-eval-runner.cjs#L490259-L490268) | `FunctionDeclaration` | no | `source` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508147-508156](../../../../../../reference/runtime/host-main.cjs#L508147-L508156) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:490259-490268](../../../../../../reference/runtime/sand-eval-runner.cjs#L490259-L490268) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:508147

Calls written directly in this body: `BC_ID.test`, `boxPathOf`, `getFilePreviewKind`, `path33.slice`, `path33.startsWith`, `rest.indexOf`, `rest.slice`.

SHA-256 of the source span: `1885446b5fd9322a7794e45695af6a071e4d5a0cf7947623ec8cbada0c4a5785`.

### evaluation:490259

Calls written directly in this body: `BC_ID.test`, `boxPathOf`, `getFilePreviewKind`, `path33.slice`, `path33.startsWith`, `rest.indexOf`, `rest.slice`.

SHA-256 of the source span: `1885446b5fd9322a7794e45695af6a071e4d5a0cf7947623ec8cbada0c4a5785`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
