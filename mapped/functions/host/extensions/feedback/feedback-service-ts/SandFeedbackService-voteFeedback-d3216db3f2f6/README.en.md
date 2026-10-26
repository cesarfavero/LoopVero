# `SandFeedbackService.voteFeedback`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/feedback/feedback-service.ts` · [Module README](../../../../../../modules/host/extensions/feedback/feedback-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553631-553673](../../../../../../../reference/runtime/host-main.cjs#L553631-L553673) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553631-553673](../../../../../../../reference/runtime/host-main.cjs#L553631-L553673) | 10 | 0 | 3 | 1 | 3 | 1 |

### host:553631

Calls written directly in this body: `String`, `new SandFeedbackVoteTargetError`, `parseAgentId`, `this.deps.logReportFailure`, `this.deps.report`, `this.deps.trackDialogDismissed`, `this.deps.trackSubmitted`, `this.deps.trackVote`, `this.deps.transcript.setFeedbackVote`.

Explicit throw targets: `SandFeedbackVoteTargetError`.

SHA-256 of the source span: `1cb94ac56bf39d36f993dabb4c3d4d3b2aba6622b73ca8e2d886918639a71c57`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
