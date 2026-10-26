# `automationRunPromptSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533165-533173](../../../../../../reference/runtime/sand-eval-runner.cjs#L533165-L533173) | `FunctionDeclaration` | no | `sendsToAgents` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533165-533173](../../../../../../reference/runtime/sand-eval-runner.cjs#L533165-L533173) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:533165

Calls written directly in this body: `SAND_AUTOMATION_SUBAGENT_PROMPT_SECTION.body.map`.

SHA-256 of the source span: `07da7e1f71432c9e7ab7aa4cbf3e4fd403d8e5cc19f65f421eb5d12bc35ddd9f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
