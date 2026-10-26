# `createPromptCollectorGlue/resolveMcpCustomInstructions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-collector-glue.ts` · [Module README](../../../../../modules/core/runner/prompt-collector-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533757-533766](../../../../../../reference/runtime/sand-eval-runner.cjs#L533757-L533766) | `FunctionDeclaration` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533757-533766](../../../../../../reference/runtime/sand-eval-runner.cjs#L533757-L533766) | 1 | 0 | 1 | 3 | 0 | 1 |

### evaluation:533757

Calls written directly in this body: `host.mcp.getCustomInstructions`, `new Map`.

SHA-256 of the source span: `ff2dc62a2576aa3ece7cbd0e33d6f61d2cea367e70dec35e26db34d63b912bd3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
