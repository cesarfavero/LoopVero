# `renderTrimmedAgentDirectorySystemPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/send-to-agent-roster-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/send-to-agent-roster-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:537090-537104](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537090-L537104) | `FunctionDeclaration` | no | `unorderedOthers, unorderedGroups, agentsRootDir, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537090-537104](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537090-L537104) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:537090

Calls written directly in this body: `.join`, `groupChatHistoryLine`, `lines2.join`, `lines2.push`, `rosterLines`, `sortedDirectory`.

SHA-256 of the source span: `d91abf8bc46d61f440361fb493df6641162061c406493da7e32fefd4775ab196`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
