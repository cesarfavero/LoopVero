# `runSandAutoReviewFlow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-flow.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-flow-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762105-762196](../../../../../../reference/runtime/host-main.cjs#L762105-L762196) | `FunctionDeclaration` | yes | `args` |
| [evaluation:554715-554806](../../../../../../reference/runtime/sand-eval-runner.cjs#L554715-L554806) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762105-762196](../../../../../../reference/runtime/host-main.cjs#L762105-L762196) | 29 | 0 | 2 | 9 | 0 | 0 |
| [evaluation:554715-554806](../../../../../../reference/runtime/sand-eval-runner.cjs#L554715-L554806) | 29 | 0 | 2 | 9 | 0 | 0 |

### host:762105

Calls written directly in this body: `.catch`, `args.onUserDenied`, `cancelled`, `classify3`, `fingerprintSandAutoReviewTarget`, `options2.getApprovalExpiryPolicy`, `recordRuleRefusalTheToolReportsAsText`, `recordedCardRefusal`, `requestReviewedApproval`, `sandAutoReviewCautionNote`, `spec.fingerprintPayload`, `spec.requireApproval`, `spec.summarize`, `spec.summaryCopy`.

Assignment or increment targets: `proposedRule`, `proposedRuleReplaces`.

SHA-256 of the source span: `f0488ff56c1bac03e6a48b9b07aa975f0afb10953798ae7efa19d1f7d6d7388b`.

### evaluation:554715

Calls written directly in this body: `.catch`, `args.onUserDenied`, `cancelled`, `classify2`, `fingerprintSandAutoReviewTarget`, `options2.getApprovalExpiryPolicy`, `recordRuleRefusalTheToolReportsAsText`, `recordedCardRefusal`, `requestReviewedApproval`, `sandAutoReviewCautionNote`, `spec.fingerprintPayload`, `spec.requireApproval`, `spec.summarize`, `spec.summaryCopy`.

Assignment or increment targets: `proposedRule`, `proposedRuleReplaces`.

SHA-256 of the source span: `9207a852790fafcf89d4346c787d01be8401b6cff35310bee274c93a5c92276a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
