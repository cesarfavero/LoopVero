# `runSandBrowserAutoReviewPreflight/classify4`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-browser-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699919-699931](../../../../../../reference/runtime/host-main.cjs#L699919-L699931) | `ArrowFunctionExpression` | yes | `classifierCtx` |
| [evaluation:513675-513687](../../../../../../reference/runtime/sand-eval-runner.cjs#L513675-L513687) | `ArrowFunctionExpression` | yes | `classifierCtx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699919-699931](../../../../../../reference/runtime/host-main.cjs#L699919-L699931) | 2 | 0 | 2 | 2 | 0 | 0 |
| [evaluation:513675-513687](../../../../../../reference/runtime/sand-eval-runner.cjs#L513675-L513687) | 2 | 0 | 2 | 2 | 0 | 0 |

### host:699919

Calls written directly in this body: `measureReviewPhase`, `subjectFrom`.

SHA-256 of the source span: `4f3cf2ae3e2a77ec9a9b278cbb60d62a1868a2a26cc38fdb8f43253302fe4a81`.

### evaluation:513675

Calls written directly in this body: `measureReviewPhase`, `subjectFrom`.

SHA-256 of the source span: `4f3cf2ae3e2a77ec9a9b278cbb60d62a1868a2a26cc38fdb8f43253302fe4a81`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
