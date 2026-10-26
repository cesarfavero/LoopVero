# `runSandBrowserAutoReviewPreflight/pageChangedAfterReview`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-browser-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699944-699950](../../../../../../reference/runtime/host-main.cjs#L699944-L699950) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:513700-513706](../../../../../../reference/runtime/sand-eval-runner.cjs#L513700-L513706) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699944-699950](../../../../../../reference/runtime/host-main.cjs#L699944-L699950) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513700-513706](../../../../../../reference/runtime/sand-eval-runner.cjs#L513700-L513706) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699944

Calls written directly in this body: `controller.reportDisplayRecheckFailed`, `new SandBrowserAutoReviewBlockedError`.

SHA-256 of the source span: `5f665e92b7a9bdc5291341a7b108051ef031691f3d2834227ab30b236ef09fad`.

### evaluation:513700

Calls written directly in this body: `controller.reportDisplayRecheckFailed`, `new SandBrowserAutoReviewBlockedError`.

SHA-256 of the source span: `5f665e92b7a9bdc5291341a7b108051ef031691f3d2834227ab30b236ef09fad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
