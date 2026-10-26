# `buildSandComputerClassifierRiskTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699431-699433](../../../../../../reference/runtime/host-main.cjs#L699431-L699433) | `FunctionDeclaration` | no | `args` |
| [evaluation:513187-513189](../../../../../../reference/runtime/sand-eval-runner.cjs#L513187-L513189) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699431-699433](../../../../../../reference/runtime/host-main.cjs#L699431-L699433) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513187-513189](../../../../../../reference/runtime/sand-eval-runner.cjs#L513187-L513189) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699431

Calls written directly in this body: `computerActionArguments`, `computerRiskTarget`.

SHA-256 of the source span: `3b9574e0278e7ecef896df625b1200962db70abcb49981ed2ed4c28b2dab9341`.

### evaluation:513187

Calls written directly in this body: `computerActionArguments`, `computerRiskTarget`.

SHA-256 of the source span: `3b9574e0278e7ecef896df625b1200962db70abcb49981ed2ed4c28b2dab9341`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
