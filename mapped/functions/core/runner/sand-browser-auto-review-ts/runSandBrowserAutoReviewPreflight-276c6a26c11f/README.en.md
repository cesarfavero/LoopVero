# `runSandBrowserAutoReviewPreflight`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-browser-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699856-700019](../../../../../../reference/runtime/host-main.cjs#L699856-L700019) | `FunctionDeclaration` | yes | `args` |
| [evaluation:513612-513775](../../../../../../reference/runtime/sand-eval-runner.cjs#L513612-L513775) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699856-700019](../../../../../../reference/runtime/host-main.cjs#L699856-L700019) | 12 | 0 | 5 | 4 | 6 | 0 |
| [evaluation:513612-513775](../../../../../../reference/runtime/sand-eval-runner.cjs#L513612-L513775) | 12 | 0 | 5 | 4 | 6 | 0 |

### host:699856

Calls written directly in this body: `.catch`, `args.ctx.get`, `buildSandBrowserAutoReviewClassifierSubject`, `capture`, `classify4`, `classifyAlongsideCapture`, `code.trim`, `controller.cardReasonFor`, `fingerprintSandBrowserAutoReviewTarget`, `isSandBrowserAutoReviewMutatingAction`, `measureReviewPhase`, `new SandBrowserAutoReviewBlockedError`, `normalizeSandBrowserElement`, `pageChangedAfterReview`, `recordedCardRefusal`, `settle3`, `subjectFrom`, `trackedTargetPageUrl`.

Explicit throw targets: `SandBrowserAutoReviewBlockedError`, `pageChangedAfterReview`.

SHA-256 of the source span: `56673080bfcd83a851fb060fe3f1fc7b791c1d9b8286a0a8caa9809f63e42f85`.

### evaluation:513612

Calls written directly in this body: `.catch`, `args.ctx.get`, `buildSandBrowserAutoReviewClassifierSubject`, `capture`, `classify4`, `classifyAlongsideCapture`, `code.trim`, `controller.cardReasonFor`, `fingerprintSandBrowserAutoReviewTarget`, `isSandBrowserAutoReviewMutatingAction`, `measureReviewPhase`, `new SandBrowserAutoReviewBlockedError`, `normalizeSandBrowserElement`, `pageChangedAfterReview`, `recordedCardRefusal`, `settle2`, `subjectFrom`, `trackedTargetPageUrl`.

Explicit throw targets: `SandBrowserAutoReviewBlockedError`, `pageChangedAfterReview`.

SHA-256 of the source span: `cd1e0122553d50262036672fd1c7cb7af2d551f6089aad8663bbd6590b2e4a48`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
