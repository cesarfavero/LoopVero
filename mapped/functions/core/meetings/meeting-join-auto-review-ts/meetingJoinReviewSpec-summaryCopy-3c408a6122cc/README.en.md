# `meetingJoinReviewSpec/summaryCopy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/meetings/meeting-join-auto-review.ts` · [Module README](../../../../../modules/core/meetings/meeting-join-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772803-772811](../../../../../../reference/runtime/host-main.cjs#L772803-L772811) | `ArrowFunctionExpression` | no | `{ schedule }` |
| [evaluation:572029-572037](../../../../../../reference/runtime/sand-eval-runner.cjs#L572029-L572037) | `ArrowFunctionExpression` | no | `{ schedule }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772803-772811](../../../../../../reference/runtime/host-main.cjs#L772803-L772811) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:772803 uses an implicit arrow-function return.
| [evaluation:572029-572037](../../../../../../reference/runtime/sand-eval-runner.cjs#L572029-L572037) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572029 uses an implicit arrow-function return.

### host:772803

Calls written directly in this body: `MeetingScheduleCopy.cardCopy`.

SHA-256 of the source span: `4bf334688bcf3c2bb8f9accbfc52bb6a1c1d7df94ea777e67328617b4a37a5ae`.

### evaluation:572029

Calls written directly in this body: `MeetingScheduleCopy.cardCopy`.

SHA-256 of the source span: `4bf334688bcf3c2bb8f9accbfc52bb6a1c1d7df94ea777e67328617b4a37a5ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
