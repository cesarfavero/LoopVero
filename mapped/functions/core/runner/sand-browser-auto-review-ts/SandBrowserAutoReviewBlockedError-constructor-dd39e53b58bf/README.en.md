# `SandBrowserAutoReviewBlockedError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-browser-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699685-699691](../../../../../../reference/runtime/host-main.cjs#L699685-L699691) | `method` | no | `message, telemetryCode = "policy_denied"` |
| [evaluation:513441-513447](../../../../../../reference/runtime/sand-eval-runner.cjs#L513441-L513447) | `method` | no | `message, telemetryCode = "policy_denied"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699685-699691](../../../../../../reference/runtime/host-main.cjs#L699685-L699691) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:513441-513447](../../../../../../reference/runtime/sand-eval-runner.cjs#L513441-L513447) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:699685

Calls written directly in this body: `reviewFailureAuditOutcome`, `super`.

Assignment or increment targets: `this.name`, `this.telemetryCode`, `this.toolCallAuditOutcome`, `this.toolCallTransientKind`.

SHA-256 of the source span: `a7bb4584e30144d2579c18625de3cceee8a61044c8fd0e571f98f19d65cedb49`.

### evaluation:513441

Calls written directly in this body: `reviewFailureAuditOutcome`, `super`.

Assignment or increment targets: `this.name`, `this.telemetryCode`, `this.toolCallAuditOutcome`, `this.toolCallTransientKind`.

SHA-256 of the source span: `a7bb4584e30144d2579c18625de3cceee8a61044c8fd0e571f98f19d65cedb49`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
