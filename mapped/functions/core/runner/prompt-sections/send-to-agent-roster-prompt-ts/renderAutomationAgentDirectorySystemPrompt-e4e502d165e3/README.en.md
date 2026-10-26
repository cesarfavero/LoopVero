# `renderAutomationAgentDirectorySystemPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/send-to-agent-roster-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/send-to-agent-roster-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537105-537122](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537105-L537122) | `FunctionDeclaration` | no | `unorderedOthers, unorderedGroups, agentsRootDir, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537105-537122](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537105-L537122) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:537105

Calls written directly in this body: `.join`, `rosterLines`, `sortedDirectory`.

SHA-256 of the source span: `4dfb6b09dc2d63bfca676c40309b47e58a0d76dcfafddfedb7068520401e176d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
