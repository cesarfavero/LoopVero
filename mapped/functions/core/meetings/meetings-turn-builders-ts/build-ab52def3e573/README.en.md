# `build`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meetings-turn-builders.ts` · [Module README](../../../../../modules/core/meetings/meetings-turn-builders-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773650-773650](../../../../../../reference/runtime/host-main.cjs#L773650-L773650) | `ArrowFunctionExpression` | no | `{ host: { meetingRequest, meetings } }` |
| [host:773662-773685](../../../../../../reference/runtime/host-main.cjs#L773662-L773685) | `ArrowFunctionExpression` | no | `{     host,     turn,     mcpReviewOptions   }` |
| [evaluation:572876-572876](../../../../../../reference/runtime/sand-eval-runner.cjs#L572876-L572876) | `ArrowFunctionExpression` | no | `{ host: { meetingRequest, meetings } }` |
| [evaluation:572888-572911](../../../../../../reference/runtime/sand-eval-runner.cjs#L572888-L572911) | `ArrowFunctionExpression` | no | `{     host,     turn,     mcpReviewOptions   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773650-773650](../../../../../../reference/runtime/host-main.cjs#L773650-L773650) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:773650 uses an implicit arrow-function return.
| [host:773662-773685](../../../../../../reference/runtime/host-main.cjs#L773662-L773685) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:773662 uses an implicit arrow-function return.
| [evaluation:572876-572876](../../../../../../reference/runtime/sand-eval-runner.cjs#L572876-L572876) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572876 uses an implicit arrow-function return.
| [evaluation:572888-572911](../../../../../../reference/runtime/sand-eval-runner.cjs#L572888-L572911) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:572888 uses an implicit arrow-function return.

### host:773650

Calls written directly in this body: `meetingRequestTools`.

SHA-256 of the source span: `d5a86749b44c5338a9b347041a0f913d6fda298e1cf08e696d23f62142ff6402`.

### host:773662

Calls written directly in this body: `meetingsTurnTools`, `sandMeetingInstructionReviewer`, `sandMeetingJoinReviewer`.

SHA-256 of the source span: `e1c86232734e5a371b4b4f3580181fa3e8876068e989d769c4af502557155b4e`.

### evaluation:572876

Calls written directly in this body: `meetingRequestTools`.

SHA-256 of the source span: `d5a86749b44c5338a9b347041a0f913d6fda298e1cf08e696d23f62142ff6402`.

### evaluation:572888

Calls written directly in this body: `meetingsTurnTools`, `sandMeetingInstructionReviewer`, `sandMeetingJoinReviewer`.

SHA-256 of the source span: `e1c86232734e5a371b4b4f3580181fa3e8876068e989d769c4af502557155b4e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
