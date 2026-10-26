# `runSandAutoReviewClassifier`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-classifier-run.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-classifier-run-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693658-693708](../../../../../../reference/runtime/host-main.cjs#L693658-L693708) | `FunctionDeclaration` | yes | `args` |
| [evaluation:490894-490944](../../../../../../reference/runtime/sand-eval-runner.cjs#L490894-L490944) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693658-693708](../../../../../../reference/runtime/host-main.cjs#L693658-L693708) | 6 | 0 | 2 | 5 | 1 | 1 |
| [evaluation:490894-490944](../../../../../../reference/runtime/sand-eval-runner.cjs#L490894-L490944) | 6 | 0 | 2 | 5 | 1 | 1 |

### host:693658

Calls written directly in this body: `.filter`, `args.buildTarget`, `args.loadConversationContext`, `args.resourceAccessor.get`, `blockReason.trim`, `executeSmartModeClassifierWithMeasurement2`, `getConversationGroupId`, `getConversationId`, `new SmartModeClassifierArgs`, `proposalOf`, `sandAutoReviewAppliedRules`, `smartModeBlockSignalsOf`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `9df6d9f6ba7c3ef6cda2803ecbd28b5f9ef94aa38e19bd0689972aec6e4e457e`.

### evaluation:490894

Calls written directly in this body: `.filter`, `args.buildTarget`, `args.loadConversationContext`, `args.resourceAccessor.get`, `blockReason.trim`, `executeSmartModeClassifierWithMeasurement2`, `getConversationGroupId`, `getConversationId`, `new SmartModeClassifierArgs`, `proposalOf`, `sandAutoReviewAppliedRules`, `smartModeBlockSignalsOf`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `99ac0c94274f476951922490bbb25deab76075e9c570515b596dd36f7c7f23c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
