# `formatProjectSideChatPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:641355-641365](../../../../../../reference/runtime/host-main.cjs#L641355-L641365) | `FunctionDeclaration` | no | `options2` |
| [evaluation:431968-431978](../../../../../../reference/runtime/sand-eval-runner.cjs#L431968-L431978) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641355-641365](../../../../../../reference/runtime/host-main.cjs#L641355-L641365) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431968-431978](../../../../../../reference/runtime/sand-eval-runner.cjs#L431968-L431978) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:641355

Calls written directly in this body: `escapeProjectName`, `isSafeStorePathForPrompt`, `projectReference`, `promptOverrideOrDefault`, `sideChatBody`.

SHA-256 of the source span: `3a6f0ce0f690e61000c55d04ad358938da1880feb28dd397ec0343ebe1ad8405`.

### evaluation:431968

Calls written directly in this body: `escapeProjectName`, `isSafeStorePathForPrompt`, `projectReference`, `promptOverrideOrDefault`, `sideChatBody`.

SHA-256 of the source span: `3a6f0ce0f690e61000c55d04ad358938da1880feb28dd397ec0343ebe1ad8405`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
