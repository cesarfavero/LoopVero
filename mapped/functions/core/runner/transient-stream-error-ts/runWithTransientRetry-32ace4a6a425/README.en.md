# `runWithTransientRetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590117-590146](../../../../../../reference/runtime/sand-eval-runner.cjs#L590117-L590146) | `FunctionDeclaration` | yes | `run, policy` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590117-590146](../../../../../../reference/runtime/sand-eval-runner.cjs#L590117-L590146) | 2 | 1 | 2 | 1 | 1 | 1 |

### evaluation:590117

Calls written directly in this body: `Math.floor`, `Math.max`, `computeBackoffDelayMs`, `computeServerPacedDelayMs`, `isRetryable`, `policy.onRetry`, `run`, `serverRetryAfterMsFromError`, `sleep2`.

Assignment or increment targets: `attempt`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `3d9245f58c61e64f22c7ac9f9f64b14e6026060a8e7d153a70656a984eef19ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
