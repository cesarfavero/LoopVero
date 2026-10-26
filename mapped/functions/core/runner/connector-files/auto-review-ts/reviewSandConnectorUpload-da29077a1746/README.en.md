# `reviewSandConnectorUpload`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/connector-files/auto-review.ts` · [Module README](../../../../../../modules/core/runner/connector-files/auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774869-774875](../../../../../../../reference/runtime/host-main.cjs#L774869-L774875) | `FunctionDeclaration` | yes | `args` |
| [evaluation:574472-574478](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574472-L574478) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774869-774875](../../../../../../../reference/runtime/host-main.cjs#L774869-L774875) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:574472-574478](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574472-L574478) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:774869

Calls written directly in this body: `runSandAutoReviewFlow`.

SHA-256 of the source span: `0be15138f4906b4d31efc1bb16396a8cc41b364270623fa5140978fa7d1162a7`.

### evaluation:574472

Calls written directly in this body: `runSandAutoReviewFlow`.

SHA-256 of the source span: `0be15138f4906b4d31efc1bb16396a8cc41b364270623fa5140978fa7d1162a7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
