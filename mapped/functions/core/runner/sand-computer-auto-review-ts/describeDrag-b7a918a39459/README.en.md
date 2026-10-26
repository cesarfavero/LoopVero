# `describeDrag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699457-699459](../../../../../../reference/runtime/host-main.cjs#L699457-L699459) | `FunctionDeclaration` | no | `exactAction` |
| [evaluation:513213-513215](../../../../../../reference/runtime/sand-eval-runner.cjs#L513213-L513215) | `FunctionDeclaration` | no | `exactAction` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699457-699459](../../../../../../reference/runtime/host-main.cjs#L699457-L699459) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513213-513215](../../../../../../reference/runtime/sand-eval-runner.cjs#L513213-L513215) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699457

Calls written directly in this body: `describeHeldGesture`, `pointText`.

SHA-256 of the source span: `078803ad6a94dd40f9d2f1a85a9ad496270105fc734ae2fc55d0b87f320d3477`.

### evaluation:513213

Calls written directly in this body: `describeHeldGesture`, `pointText`.

SHA-256 of the source span: `078803ad6a94dd40f9d2f1a85a9ad496270105fc734ae2fc55d0b87f320d3477`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
