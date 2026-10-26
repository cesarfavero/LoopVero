# `prefetchOutlivingTheArgumentStream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/subagent-launch-prefetch.ts` · [Module README](../../../../../../modules/core/runner/subagents/subagent-launch-prefetch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:556443-556456](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556443-L556456) | `FunctionDeclaration` | yes | `detachedCtx, stateHandler, warmLaunchReviewContext` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:556443-556456](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556443-L556456) | 0 | 0 | 1 | 0 | 0 | 1 |

### evaluation:556443

Calls written directly in this body: `Promise.allSettled`, `__callDispose`, `__using`, `createSpan`, `detachedCtx.withName`, `stateHandler.ensureSubagentStatesLoaded`, `warmLaunchReviewContext`.

SHA-256 of the source span: `ff4c69e4484d8f636a1442358905bed9ab8f367f17a26edffabedf15502ca62e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
