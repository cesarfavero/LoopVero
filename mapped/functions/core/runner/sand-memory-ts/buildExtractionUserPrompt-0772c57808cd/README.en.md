# `buildExtractionUserPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536198-536213](../../../../../../reference/runtime/sand-eval-runner.cjs#L536198-L536213) | `FunctionDeclaration` | no | `userMessage, agentMessage, existingMemories, earlierExchanges, today` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536198-536213](../../../../../../reference/runtime/sand-eval-runner.cjs#L536198-L536213) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536198

Calls written directly in this body: `.join`, `earlierExchanges.flatMap`, `exchangeLines`, `existingMemories.map`.

SHA-256 of the source span: `a0afdfb7569fc7edc51b78c636c51765e5f5c6308194babb33e1ad1bfa51ba0c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
