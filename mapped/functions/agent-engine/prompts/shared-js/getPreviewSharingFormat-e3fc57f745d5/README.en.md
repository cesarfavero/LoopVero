# `getPreviewSharingFormat`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/shared.js` · [Module README](../../../../../modules/agent-engine/prompts/shared-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636157-636162](../../../../../../reference/runtime/host-main.cjs#L636157-L636162) | `FunctionDeclaration` | no | `{ agentPreviewCard, modelInfo }` |
| [evaluation:424213-424218](../../../../../../reference/runtime/sand-eval-runner.cjs#L424213-L424218) | `FunctionDeclaration` | no | `{ agentPreviewCard, modelInfo }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636157-636162](../../../../../../reference/runtime/host-main.cjs#L636157-L636162) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:424213-424218](../../../../../../reference/runtime/sand-eval-runner.cjs#L424213-L424218) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:636157

Calls written directly in this body: `prefersMarkdownPreviewLink`.

SHA-256 of the source span: `ccd56c55d8ba70337c7232c85065f23219fa17b0073b5e134ba732e4bbcc4e88`.

### evaluation:424213

Calls written directly in this body: `prefersMarkdownPreviewLink`.

SHA-256 of the source span: `ccd56c55d8ba70337c7232c85065f23219fa17b0073b5e134ba732e4bbcc4e88`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
