# `unavailableGenerateImageResources/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/evals/runner-options.ts` · [Module README](../../../../../modules/core/evals/runner-options-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596573-596578](../../../../../../reference/runtime/sand-eval-runner.cjs#L596573-L596578) | `ArrowFunctionExpression` | yes | `_ctx, args` |
| [evaluation:596581-596586](../../../../../../reference/runtime/sand-eval-runner.cjs#L596581-L596586) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596573-596578](../../../../../../reference/runtime/sand-eval-runner.cjs#L596573-L596578) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:596573 uses an implicit arrow-function return.
| [evaluation:596581-596586](../../../../../../reference/runtime/sand-eval-runner.cjs#L596581-L596586) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:596581 uses an implicit arrow-function return.

### evaluation:596573

Calls written directly in this body: `new ReadError`, `new ReadResult`.

SHA-256 of the source span: `f24cceffdb1c83ba7c491676647e75ef51b72a345cacf44fc18b85b69c5cf180`.

### evaluation:596581

Calls written directly in this body: `new WriteError`, `new WriteResult`.

SHA-256 of the source span: `244c93a1d6993520eeb6e246bc4f6020ac8bceb6495050451cbc3a1366e2e208`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
