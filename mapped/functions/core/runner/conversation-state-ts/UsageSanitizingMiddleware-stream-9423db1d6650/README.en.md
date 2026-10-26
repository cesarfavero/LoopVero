# `UsageSanitizingMiddleware.stream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-state.ts` · [Module README](../../../../../modules/core/runner/conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529583-529620](../../../../../../reference/runtime/sand-eval-runner.cjs#L529583-L529620) | `method` | no | `ctx, invocationId, tools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529583-529620](../../../../../../reference/runtime/sand-eval-runner.cjs#L529583-L529620) | 1 | 0 | 0 | 2 | 1 | 1 |

### evaluation:529583

Calls written directly in this body: `safelyObservePromptStream`, `sanitizeStreamResult`, `this.innerExecutor.stream`, `this.resolvedModelTracking.onRequestStart`, `this.resolvedModelTracking.tracker.beginRequest`.

Assignment or increment targets: `streamResult`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `f2580e95c839fd044e8e694fd5c9b435e64ac2509b2114f6d47ba6fca5f657a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
