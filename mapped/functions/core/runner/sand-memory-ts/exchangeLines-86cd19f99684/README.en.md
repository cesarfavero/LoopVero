# `exchangeLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536192-536197](../../../../../../reference/runtime/sand-eval-runner.cjs#L536192-L536197) | `FunctionDeclaration` | no | `userMessage, agentMessage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536192-536197](../../../../../../reference/runtime/sand-eval-runner.cjs#L536192-L536197) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536192

Calls written directly in this body: `agentMessage.trim`, `userMessage.trim`.

SHA-256 of the source span: `aa7e4b873316c0b2148631e015c8fdedd945f8152ad449b11d30437db7785a5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
