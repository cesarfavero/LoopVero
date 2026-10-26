# `meetingJoinReviewSpec/buildRiskTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/meetings/meeting-join-auto-review.ts` · [Module README](../../../../../modules/core/meetings/meeting-join-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772782-772795](../../../../../../reference/runtime/host-main.cjs#L772782-L772795) | `ArrowFunctionExpression` | no | `{ target, ...instructions }` |
| [evaluation:572008-572021](../../../../../../reference/runtime/sand-eval-runner.cjs#L572008-L572021) | `ArrowFunctionExpression` | no | `{ target, ...instructions }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772782-772795](../../../../../../reference/runtime/host-main.cjs#L772782-L772795) | 2 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:772782 uses an implicit arrow-function return.
| [evaluation:572008-572021](../../../../../../reference/runtime/sand-eval-runner.cjs#L572008-L572021) | 2 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572008 uses an implicit arrow-function return.

### host:772782

Calls written directly in this body: `MeetingScheduleCopy.reviewRecord`, `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`, `turnProvenance`.

SHA-256 of the source span: `d526da01eb4ab5e13ebbba676420fa2d60097e9c9cb5c77924ca27bd5de926a5`.

### evaluation:572008

Calls written directly in this body: `MeetingScheduleCopy.reviewRecord`, `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`, `turnProvenance`.

SHA-256 of the source span: `d526da01eb4ab5e13ebbba676420fa2d60097e9c9cb5c77924ca27bd5de926a5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
