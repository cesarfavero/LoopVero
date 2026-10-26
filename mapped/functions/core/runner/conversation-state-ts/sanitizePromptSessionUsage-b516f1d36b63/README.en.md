# `sanitizePromptSessionUsage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-state.ts` · [Module README](../../../../../modules/core/runner/conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529625-529670](../../../../../../reference/runtime/sand-eval-runner.cjs#L529625-L529670) | `FunctionDeclaration` | no | `session, resolvedModelTracker = createSandResolvedModelTracker(), onResolvedModelId, streamObserver, untrackedStreamObserver` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529625-529670](../../../../../../reference/runtime/sand-eval-runner.cjs#L529625-L529670) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529625

Calls written directly in this body: `resolvedModelTracker.get`, `session.getModelId`.

SHA-256 of the source span: `ebe68f03562ac73bd24d1f1d122323bbc923c2c3d3587c3f75c6803d7c1a5834`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
