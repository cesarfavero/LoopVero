# `loadLaunchReviewContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/subagent-launch-prefetch.ts` · [Module README](../../../../../../modules/core/runner/subagents/subagent-launch-prefetch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:556496-556514](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556496-L556514) | `FunctionDeclaration` | yes | `ctx, prefetched, load2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:556496-556514](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556496-L556514) | 0 | 0 | 1 | 1 | 0 | 1 |

### evaluation:556496

Calls written directly in this body: `String`, `__callDispose`, `__using`, `createSpan`, `ctx.withName`, `launchReviewContextMs.histogram`, `load2`, `performance.now`, `span.span.setAttribute`.

SHA-256 of the source span: `52695e5ba4b550fa7bbae9e8805d093761fd8b4336a1b3eaa48e8722cd0f31e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
