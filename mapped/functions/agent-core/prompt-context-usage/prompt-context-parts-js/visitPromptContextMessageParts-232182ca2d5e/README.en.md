# `visitPromptContextMessageParts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476239-476260](../../../../../../reference/runtime/host-main.cjs#L476239-L476260) | `FunctionDeclaration` | no | `message, messageIndex, isInitialUserPrompt, visit3` |
| [evaluation:255549-255570](../../../../../../reference/runtime/sand-eval-runner.cjs#L255549-L255570) | `FunctionDeclaration` | no | `message, messageIndex, isInitialUserPrompt, visit3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476239-476260](../../../../../../reference/runtime/host-main.cjs#L476239-L476260) | 2 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:255549-255570](../../../../../../reference/runtime/sand-eval-runner.cjs#L255549-L255570) | 2 | 1 | 0 | 0 | 0 | 0 |

### host:476239

Calls written directly in this body: `Array.isArray`, `isSummaryCarrierMessage`, `visitContentPart`, `visitValue`.

Assignment or increment targets: `index`.

SHA-256 of the source span: `916fb1221378d57701a1034f49c005f71cb34fa69c1ffc6ab7dd53d9301697ff`.

### evaluation:255549

Calls written directly in this body: `Array.isArray`, `isSummaryCarrierMessage`, `visitContentPart`, `visitValue`.

Assignment or increment targets: `index`.

SHA-256 of the source span: `916fb1221378d57701a1034f49c005f71cb34fa69c1ffc6ab7dd53d9301697ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
