# `visitPromptContextParts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476230-476238](../../../../../../reference/runtime/host-main.cjs#L476230-L476238) | `FunctionDeclaration` | no | `messages2, visit3` |
| [evaluation:255540-255548](../../../../../../reference/runtime/sand-eval-runner.cjs#L255540-L255548) | `FunctionDeclaration` | no | `messages, visit3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476230-476238](../../../../../../reference/runtime/host-main.cjs#L476230-L476238) | 1 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:255540-255548](../../../../../../reference/runtime/sand-eval-runner.cjs#L255540-L255548) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:476230

Calls written directly in this body: `findInitialUserPromptIndex`, `visitPromptContextMessageParts`.

Assignment or increment targets: `messageIndex`.

SHA-256 of the source span: `32acd56e70bc8598f9d7f2da849c63cf793f0fb597eee004fa9443411175e239`.

### evaluation:255540

Calls written directly in this body: `findInitialUserPromptIndex`, `visitPromptContextMessageParts`.

Assignment or increment targets: `messageIndex`.

SHA-256 of the source span: `748ed8accc07250f852c2219ad4c6956a1c15bd92ab2b59f69f7afa82a767b97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
