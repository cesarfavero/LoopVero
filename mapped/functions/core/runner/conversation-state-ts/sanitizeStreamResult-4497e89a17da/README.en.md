# `sanitizeStreamResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-state.ts` · [Module README](../../../../../modules/core/runner/conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529511-529551](../../../../../../reference/runtime/sand-eval-runner.cjs#L529511-L529551) | `FunctionDeclaration` | no | `ctx, result, modelId, onResolvedModelId, streamObserver` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529511-529551](../../../../../../reference/runtime/sand-eval-runner.cjs#L529511-L529551) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529511

Calls written directly in this body: `.then`, `Promise.all`, `result.usage.then`, `sanitizeFullStream`.

SHA-256 of the source span: `97f6f3a6f7d41b77a0bf94c69f79d6c38d127521e7f6fe32b53ec46c85147220`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
