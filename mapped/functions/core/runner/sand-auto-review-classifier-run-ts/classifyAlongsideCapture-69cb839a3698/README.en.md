# `classifyAlongsideCapture`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-classifier-run.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-classifier-run-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693643-693657](../../../../../../reference/runtime/host-main.cjs#L693643-L693657) | `FunctionDeclaration` | yes | `ctx, capture, classify4` |
| [evaluation:490879-490893](../../../../../../reference/runtime/sand-eval-runner.cjs#L490879-L490893) | `FunctionDeclaration` | yes | `ctx, capture, classify4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693643-693657](../../../../../../reference/runtime/host-main.cjs#L693643-L693657) | 1 | 0 | 2 | 1 | 1 | 0 |
| [evaluation:490879-490893](../../../../../../reference/runtime/sand-eval-runner.cjs#L490879-L490893) | 1 | 0 | 2 | 1 | 1 | 0 |

### host:693643

Calls written directly in this body: `.then`, `cancelClassifier`, `classify4`, `ctx.withCancel`.

Explicit throw targets: `outcome.error`.

SHA-256 of the source span: `add76e6be35dd523ba986b78f24f021566e1bb3d0824a7afc6701a4cc5f797e1`.

### evaluation:490879

Calls written directly in this body: `.then`, `cancelClassifier`, `classify4`, `ctx.withCancel`.

Explicit throw targets: `outcome.error`.

SHA-256 of the source span: `7c27e7ee4421f9780ef4459beee3d282b259be5746e8010abf14d59743c9ea1d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
