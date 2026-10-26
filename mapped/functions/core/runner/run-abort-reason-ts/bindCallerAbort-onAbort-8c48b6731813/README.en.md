# `bindCallerAbort/onAbort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/run-abort-reason.ts` · [Module README](../../../../../modules/core/runner/run-abort-reason-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554087-554087](../../../../../../reference/runtime/sand-eval-runner.cjs#L554087-L554087) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554087-554087](../../../../../../reference/runtime/sand-eval-runner.cjs#L554087-L554087) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:554087 uses an implicit arrow-function return.

### evaluation:554087

Calls written directly in this body: `abort`, `new SandRunAbortError`.

SHA-256 of the source span: `b67db0dd6597ff3da601c0222b7a9a114831137d040485d15018c08e4f88a9db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
