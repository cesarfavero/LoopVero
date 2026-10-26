# `UsageSanitizingMiddleware.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-state.ts` · [Module README](../../../../../modules/core/runner/conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529574-529579](../../../../../../reference/runtime/sand-eval-runner.cjs#L529574-L529579) | `method` | no | `innerExecutor, modelId, resolvedModelTracking, streamObserver` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529574-529579](../../../../../../reference/runtime/sand-eval-runner.cjs#L529574-L529579) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:529574

Calls written directly in this body: `super`.

Assignment or increment targets: `this.modelId`, `this.resolvedModelTracking`, `this.streamObserver`.

SHA-256 of the source span: `1bdbce7367f2cba080fe0f116fc2c9eb60e9f78650f96c653517c1eba60c1b0a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
