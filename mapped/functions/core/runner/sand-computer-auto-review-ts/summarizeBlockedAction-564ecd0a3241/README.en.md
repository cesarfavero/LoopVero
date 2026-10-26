# `summarizeBlockedAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699460-699478](../../../../../../reference/runtime/host-main.cjs#L699460-L699478) | `FunctionDeclaration` | no | `subject` |
| [evaluation:513216-513234](../../../../../../reference/runtime/sand-eval-runner.cjs#L513216-L513234) | `FunctionDeclaration` | no | `subject` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699460-699478](../../../../../../reference/runtime/host-main.cjs#L699460-L699478) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:513216-513234](../../../../../../reference/runtime/sand-eval-runner.cjs#L513216-L513234) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:699460

Calls written directly in this body: `describeClick`, `describeDrag`, `exactAction.key.slice`, `summarizeSandComputerTypedText`, `withDescription`.

SHA-256 of the source span: `6a26d1ffdfe61b3dde66ba649bf6cdaabe2a3b6cb3981244efdf665f82a2f6ed`.

### evaluation:513216

Calls written directly in this body: `describeClick`, `describeDrag`, `exactAction.key.slice`, `summarizeSandComputerTypedText`, `withDescription`.

SHA-256 of the source span: `6a26d1ffdfe61b3dde66ba649bf6cdaabe2a3b6cb3981244efdf665f82a2f6ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
