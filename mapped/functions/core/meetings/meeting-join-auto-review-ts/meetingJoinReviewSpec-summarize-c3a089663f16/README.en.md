# `meetingJoinReviewSpec/summarize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/meetings/meeting-join-auto-review.ts` · [Module README](../../../../../modules/core/meetings/meeting-join-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772802-772802](../../../../../../reference/runtime/host-main.cjs#L772802-L772802) | `ArrowFunctionExpression` | no | `{ schedule }` |
| [evaluation:572028-572028](../../../../../../reference/runtime/sand-eval-runner.cjs#L572028-L572028) | `ArrowFunctionExpression` | no | `{ schedule }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772802-772802](../../../../../../reference/runtime/host-main.cjs#L772802-L772802) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:772802 uses an implicit arrow-function return.
| [evaluation:572028-572028](../../../../../../reference/runtime/sand-eval-runner.cjs#L572028-L572028) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572028 uses an implicit arrow-function return.

### host:772802

Calls written directly in this body: `MeetingScheduleCopy.summary`.

SHA-256 of the source span: `90c3feca6f4e7fa0a9e90f2e6e60db951ec191cf7e4dceefa21fe8497011c05b`.

### evaluation:572028

Calls written directly in this body: `MeetingScheduleCopy.summary`.

SHA-256 of the source span: `90c3feca6f4e7fa0a9e90f2e6e60db951ec191cf7e4dceefa21fe8497011c05b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
