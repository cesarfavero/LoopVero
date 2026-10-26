# `meetingJoinReviewSpec/fingerprintPayload`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/meetings/meeting-join-auto-review.ts` · [Module README](../../../../../modules/core/meetings/meeting-join-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772796-772801](../../../../../../reference/runtime/host-main.cjs#L772796-L772801) | `ArrowFunctionExpression` | no | `{ schedule }` |
| [evaluation:572022-572027](../../../../../../reference/runtime/sand-eval-runner.cjs#L572022-L572027) | `ArrowFunctionExpression` | no | `{ schedule }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772796-772801](../../../../../../reference/runtime/host-main.cjs#L772796-L772801) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:772796 uses an implicit arrow-function return.
| [evaluation:572022-572027](../../../../../../reference/runtime/sand-eval-runner.cjs#L572022-L572027) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572022 uses an implicit arrow-function return.

### host:772796

Calls written directly in this body: `MeetingScheduleCopy.reviewRecord`.

SHA-256 of the source span: `289003b1372b683757a302f893d442ef8350a2377ff2375ca26c1be56332a136`.

### evaluation:572022

Calls written directly in this body: `MeetingScheduleCopy.reviewRecord`.

SHA-256 of the source span: `289003b1372b683757a302f893d442ef8350a2377ff2375ca26c1be56332a136`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
