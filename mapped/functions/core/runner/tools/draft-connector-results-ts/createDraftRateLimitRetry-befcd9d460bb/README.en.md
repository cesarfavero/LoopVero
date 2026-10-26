# `createDraftRateLimitRetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733001-733014](../../../../../../../reference/runtime/host-main.cjs#L733001-L733014) | `FunctionDeclaration` | no | `clock = realClock` |
| [evaluation:540523-540536](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540523-L540536) | `FunctionDeclaration` | no | `clock = realClock` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733001-733014](../../../../../../../reference/runtime/host-main.cjs#L733001-L733014) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540523-540536](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540523-L540536) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:733001

Calls written directly in this body: `createRetryPolicy`.

SHA-256 of the source span: `2fddfb8b4d96b3f604d6c0487bd9a5138e438c230589c65f2255aa97f9d0cf63`.

### evaluation:540523

Calls written directly in this body: `createRetryPolicy`.

SHA-256 of the source span: `2fddfb8b4d96b3f604d6c0487bd9a5138e438c230589c65f2255aa97f9d0cf63`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
