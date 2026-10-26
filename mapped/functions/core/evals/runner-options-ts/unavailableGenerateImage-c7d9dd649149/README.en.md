# `unavailableGenerateImage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/evals/runner-options.ts` · [Module README](../../../../../modules/core/evals/runner-options-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596563-596569](../../../../../../reference/runtime/sand-eval-runner.cjs#L596563-L596569) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596563-596569](../../../../../../reference/runtime/sand-eval-runner.cjs#L596563-L596569) | 0 | 0 | 0 | 0 | 1 | 0 |

### evaluation:596563

Calls written directly in this body: `new ToolCallError`.

Explicit throw targets: `ToolCallError`.

SHA-256 of the source span: `27d688b2af99e7b3fcca544fa0363c6ffae08b60572c1ab89cc1f2644f3435cc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
