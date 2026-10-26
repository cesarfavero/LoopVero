# `SandComputerAutoReviewBlockedError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-computer-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699278-699284](../../../../../../reference/runtime/host-main.cjs#L699278-L699284) | `method` | no | `message, telemetryCode = "policy_denied"` |
| [evaluation:513034-513040](../../../../../../reference/runtime/sand-eval-runner.cjs#L513034-L513040) | `method` | no | `message, telemetryCode = "policy_denied"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699278-699284](../../../../../../reference/runtime/host-main.cjs#L699278-L699284) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:513034-513040](../../../../../../reference/runtime/sand-eval-runner.cjs#L513034-L513040) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:699278

Calls written directly in this body: `reviewFailureAuditOutcome`, `super`.

Assignment or increment targets: `this.name`, `this.telemetryCode`, `this.toolCallAuditOutcome`, `this.toolCallTransientKind`.

SHA-256 of the source span: `9319a8b312d19c1b85cdc7f48b327ab22207756ed87e06f79ccba8dca3950a1a`.

### evaluation:513034

Calls written directly in this body: `reviewFailureAuditOutcome`, `super`.

Assignment or increment targets: `this.name`, `this.telemetryCode`, `this.toolCallAuditOutcome`, `this.toolCallTransientKind`.

SHA-256 of the source span: `9319a8b312d19c1b85cdc7f48b327ab22207756ed87e06f79ccba8dca3950a1a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
