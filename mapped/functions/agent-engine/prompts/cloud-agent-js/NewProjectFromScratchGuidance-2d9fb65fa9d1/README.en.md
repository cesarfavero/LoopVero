# `NewProjectFromScratchGuidance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/cloud-agent.js` · [Module README](../../../../../modules/agent-engine/prompts/cloud-agent-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:636179-636183](../../../../../../reference/runtime/host-main.cjs#L636179-L636183) | `FunctionDeclaration` | no | `{ agentPreviewCard = false, preferMarkdownPreviewLink = false, skipPreviewScreenshot = false, agentPreviewCardXmllint = false, appsPublishPill = false, seededEmptyRoot = false, sendMessageToolName } = {}` |
| [evaluation:424235-424239](../../../../../../reference/runtime/sand-eval-runner.cjs#L424235-L424239) | `FunctionDeclaration` | no | `{ agentPreviewCard = false, preferMarkdownPreviewLink = false, skipPreviewScreenshot = false, agentPreviewCardXmllint = false, appsPublishPill = false, seededEmptyRoot = false, sendMessageToolName } = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636179-636183](../../../../../../reference/runtime/host-main.cjs#L636179-L636183) | 10 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424235-424239](../../../../../../reference/runtime/sand-eval-runner.cjs#L424235-L424239) | 10 | 0 | 0 | 1 | 0 | 0 |

### host:636179

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `24cec035d91a6afcd3ece304f96752ce1420cf383434f858c24f6da747a83b02`.

### evaluation:424235

Calls written directly in this body: `jsx`, `jsxs`.

SHA-256 of the source span: `24cec035d91a6afcd3ece304f96752ce1420cf383434f858c24f6da747a83b02`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
