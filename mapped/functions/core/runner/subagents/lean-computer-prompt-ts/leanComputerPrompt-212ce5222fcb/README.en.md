# `leanComputerPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/lean-computer-prompt.ts` · [Module README](../../../../../../modules/core/runner/subagents/lean-computer-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528893-528919](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528893-L528919) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528893-528919](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528893-L528919) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:528893

Calls written directly in this body: `.join`, `browserToolsClause`, `subagentHumanStepRule`, `workingFastLines`.

SHA-256 of the source span: `885831b062a2b64d7fb25874625cdd6a4d0b602bdf99c8c15faefa4649f76445`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
