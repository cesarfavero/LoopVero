# `resolvedSendMessageSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:641034-641049](../../../../../../reference/runtime/host-main.cjs#L641034-L641049) | `FunctionDeclaration` | no | `sendMessageToolName, options2` |
| [evaluation:431647-431662](../../../../../../reference/runtime/sand-eval-runner.cjs#L431647-L431662) | `FunctionDeclaration` | no | `sendMessageToolName, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641034-641049](../../../../../../reference/runtime/host-main.cjs#L641034-L641049) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431647-431662](../../../../../../reference/runtime/sand-eval-runner.cjs#L431647-L431662) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:641034

Calls written directly in this body: `options2.guidanceText.firstMessageRule.replaceAll`, `options2.guidanceText.sendMessageGuidance.replaceAll`, `promptOverrideOrDefault`, `sendMessageSection`.

SHA-256 of the source span: `01a9d7ebd090278c5d6e5cfc6675b06cdf2254d578ae533ccb2e9186e0d86097`.

### evaluation:431647

Calls written directly in this body: `options2.guidanceText.firstMessageRule.replaceAll`, `options2.guidanceText.sendMessageGuidance.replaceAll`, `promptOverrideOrDefault`, `sendMessageSection`.

SHA-256 of the source span: `01a9d7ebd090278c5d6e5cfc6675b06cdf2254d578ae533ccb2e9186e0d86097`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
