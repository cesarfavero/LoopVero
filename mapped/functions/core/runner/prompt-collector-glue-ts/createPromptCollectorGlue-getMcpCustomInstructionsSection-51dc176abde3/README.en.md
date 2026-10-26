# `createPromptCollectorGlue/getMcpCustomInstructionsSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-collector-glue.ts` · [Module README](../../../../../modules/core/runner/prompt-collector-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533748-533756](../../../../../../reference/runtime/sand-eval-runner.cjs#L533748-L533756) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533748-533756](../../../../../../reference/runtime/sand-eval-runner.cjs#L533748-L533756) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:533748

Calls written directly in this body: `buildMcpCustomInstructionsSystemPromptSection`, `host.mcpConnectedServerNamesForTurn`, `host.mcpCustomInstructionsForTurn`.

SHA-256 of the source span: `7e6cb537d54f801c892d5fb10daf24d9972bf4846d5352f3cdb75c414cf7522d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
