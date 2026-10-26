# `initialPromptBlocks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476391-476398](../../../../../../reference/runtime/host-main.cjs#L476391-L476398) | `FunctionDeclaration` | no | `text3` |
| [evaluation:255701-255708](../../../../../../reference/runtime/sand-eval-runner.cjs#L255701-L255708) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476391-476398](../../../../../../reference/runtime/host-main.cjs#L476391-L476398) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255701-255708](../../../../../../reference/runtime/sand-eval-runner.cjs#L255701-L255708) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476391

Calls written directly in this body: `INITIAL_PROMPT_BLOCKS.flatMap`, `extractCompleteTagRanges`.

SHA-256 of the source span: `515b3b18567b66289dc3d2324a2d07e8f4a7004cb8c84e5cdbff358802e43dea`.

### evaluation:255701

Calls written directly in this body: `INITIAL_PROMPT_BLOCKS.flatMap`, `extractCompleteTagRanges`.

SHA-256 of the source span: `515b3b18567b66289dc3d2324a2d07e8f4a7004cb8c84e5cdbff358802e43dea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
