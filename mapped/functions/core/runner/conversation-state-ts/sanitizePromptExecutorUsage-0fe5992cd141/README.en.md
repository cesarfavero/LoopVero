# `sanitizePromptExecutorUsage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-state.ts` · [Module README](../../../../../modules/core/runner/conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529622-529624](../../../../../../reference/runtime/sand-eval-runner.cjs#L529622-L529624) | `FunctionDeclaration` | no | `executor, modelId, resolvedModelTracking, streamObserver` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529622-529624](../../../../../../reference/runtime/sand-eval-runner.cjs#L529622-L529624) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529622

Calls written directly in this body: `new UsageSanitizingMiddleware`.

SHA-256 of the source span: `984d670f758ae561c590ef45bd4aca7dac23086a21789fd3a04b95ea1e960173`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
