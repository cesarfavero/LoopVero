# `sandMeetingJoinReviewer/review/review`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/meetings/meeting-join-auto-review.ts` · [Module README](../../../../../modules/core/meetings/meeting-join-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772835-772843](../../../../../../reference/runtime/host-main.cjs#L772835-L772843) | `ArrowFunctionExpression` | no | `reviewSpec` |
| [evaluation:572061-572069](../../../../../../reference/runtime/sand-eval-runner.cjs#L572061-L572069) | `ArrowFunctionExpression` | no | `reviewSpec` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772835-772843](../../../../../../reference/runtime/host-main.cjs#L772835-L772843) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:772835 uses an implicit arrow-function return.
| [evaluation:572061-572069](../../../../../../reference/runtime/sand-eval-runner.cjs#L572061-L572069) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572061 uses an implicit arrow-function return.

### host:772835

Calls written directly in this body: `runSandAutoReviewFlow`.

SHA-256 of the source span: `11c29688411ef73da850b1aaf3ec6a3eb06a95812bf062bc91e85df187abd0a1`.

### evaluation:572061

Calls written directly in this body: `runSandAutoReviewFlow`.

SHA-256 of the source span: `11c29688411ef73da850b1aaf3ec6a3eb06a95812bf062bc91e85df187abd0a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
