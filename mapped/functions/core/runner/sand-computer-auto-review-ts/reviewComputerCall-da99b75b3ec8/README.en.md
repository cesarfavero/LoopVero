# `reviewComputerCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699546-699641](../../../../../../reference/runtime/host-main.cjs#L699546-L699641) | `FunctionDeclaration` | yes | `args, call` |
| [evaluation:513302-513397](../../../../../../reference/runtime/sand-eval-runner.cjs#L513302-L513397) | `FunctionDeclaration` | yes | `args, call` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699546-699641](../../../../../../reference/runtime/host-main.cjs#L699546-L699641) | 16 | 0 | 5 | 3 | 5 | 0 |
| [evaluation:513302-513397](../../../../../../reference/runtime/sand-eval-runner.cjs#L513302-L513397) | 16 | 0 | 5 | 3 | 5 | 0 |

### host:699546

Calls written directly in this body: `args.ctx.get`, `assertDisplayStateUnchanged`, `call.fingerprint`, `call.summarize`, `classifyAlongsideCapture`, `controller.approvedFingerprintFor`, `controller.cardReasonFor`, `formatSandComputerAutoReviewBlockedReason`, `new SandComputerAutoReviewBlockedError`, `options2.captureDisplayStateIdentity`, `options2.getApprovalExpiryPolicy`, `pageChangedAfterReview`, `recordedCardRefusal`, `requestReviewedApproval`, `reviewAgainstApprovedCard`, `runShadowClassifier`.

Explicit throw targets: `SandComputerAutoReviewBlockedError`, `pageChangedAfterReview`.

SHA-256 of the source span: `6b3d78a60ef4e921198405c8d86e9d71b6a8521406b66303d01516290b1dddc9`.

### evaluation:513302

Calls written directly in this body: `args.ctx.get`, `assertDisplayStateUnchanged`, `call.fingerprint`, `call.summarize`, `classifyAlongsideCapture`, `controller.approvedFingerprintFor`, `controller.cardReasonFor`, `formatSandComputerAutoReviewBlockedReason`, `new SandComputerAutoReviewBlockedError`, `options2.captureDisplayStateIdentity`, `options2.getApprovalExpiryPolicy`, `pageChangedAfterReview`, `recordedCardRefusal`, `requestReviewedApproval`, `reviewAgainstApprovedCard`, `runShadowClassifier`.

Explicit throw targets: `SandComputerAutoReviewBlockedError`, `pageChangedAfterReview`.

SHA-256 of the source span: `6b3d78a60ef4e921198405c8d86e9d71b6a8521406b66303d01516290b1dddc9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
