# `reviewSandConnectorDownload`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/connector-files/auto-review.ts` · [Module README](../../../../../../modules/core/runner/connector-files/auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774924-774930](../../../../../../../reference/runtime/host-main.cjs#L774924-L774930) | `FunctionDeclaration` | yes | `args` |
| [evaluation:574527-574533](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574527-L574533) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774924-774930](../../../../../../../reference/runtime/host-main.cjs#L774924-L774930) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:574527-574533](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574527-L574533) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:774924

Calls written directly in this body: `runSandAutoReviewFlow`.

SHA-256 of the source span: `af49f9052f0c578eeca960fb4bfa5e076803cc2bd097c96b48b763c5ffc06d15`.

### evaluation:574527

Calls written directly in this body: `runSandAutoReviewFlow`.

SHA-256 of the source span: `af49f9052f0c578eeca960fb4bfa5e076803cc2bd097c96b48b763c5ffc06d15`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
