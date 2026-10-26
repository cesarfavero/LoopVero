# `applySandStateUpdate/need`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763060-763065](../../../../../../../reference/runtime/host-main.cjs#L763060-L763065) | `ArrowFunctionExpression` | no | `value, field` |
| [evaluation:555670-555675](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555670-L555675) | `ArrowFunctionExpression` | no | `value, field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763060-763065](../../../../../../../reference/runtime/host-main.cjs#L763060-L763065) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:555670-555675](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555670-L555675) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:763060

Calls written directly in this body: `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `85add39b60c41355d8e8f758e35728ebe6e5ad532dc8f8f4dff76beb494d1b5a`.

### evaluation:555670

Calls written directly in this body: `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `85add39b60c41355d8e8f758e35728ebe6e5ad532dc8f8f4dff76beb494d1b5a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
