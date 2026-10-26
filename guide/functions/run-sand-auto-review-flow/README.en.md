# `runSandAutoReviewFlow`

[English](README.en.md) · [Português (Brasil)](README.md)

[Component: approvals](../../components/approvals/README.en.md) · [Index](../../README.en.md)

**Primary source:** [sand-eval-runner.cjs:554715-554806](../../../reference/runtime/sand-eval-runner.cjs#L554715-L554806). Static analysis of the original snapshot; names preserved from the bundle.

## Contract

`runSandAutoReviewFlow(args)` returns permission with an origin (`unreviewed`, `classifier`, `user`) or a refusal with a reason. Receives a target, spec, options, call ID, and optional signal.

## Decision order

Off allows immediately. Shadow starts classification without blocking and allows; a shadow error is diagnostic. In enforce mode, it checks cancellation, a rule requiring approval, and a previous refusal by fingerprint. It classifies only when there is no already known block. It checks cancellation again. Allow permits the action; a non-allowed result without a controller refuses it. Block with a controller requests approval and checks cancellation again afterward.

## Approval binding

The fingerprint derives from `spec.fingerprintPayload(target)`. The request carries the agent, surface, summary, reason, caution, proposed/applied rules, signal, and expiration. An approved result identifies user origin. A denial retains the reason. The explicit-refusal callback is not triggered for every form of retirement.

## State and remote boundary

`toolDecisions` records policy and card history; `autoReviewController` conducts approval. The classifier is called through a resource accessor and extracted context. Its model, training, and thresholds are not implemented in this function.

## Consequence

The effective mode must be known before claiming that an action was reviewed. Shadow measures without preventing the action; off does not even wait for classification. The presence of this code in the bundle does not prove which mode was active for a real account.
