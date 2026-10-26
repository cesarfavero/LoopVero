# `createSystemPromptAssembly/getTeamBotSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553551-553556](../../../../../../reference/runtime/sand-eval-runner.cjs#L553551-L553556) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553551-553556](../../../../../../reference/runtime/sand-eval-runner.cjs#L553551-L553556) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:553551

Calls written directly in this body: `deps.teamBot`, `renderTeamBotPrompt`, `slackChannelMembershipGates`.

SHA-256 of the source span: `ae1728d928e2c7a1913a03619bcb83634a587caae6055112f9b6332637ace6c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
