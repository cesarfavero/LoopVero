# `_MeetingsTools.leave`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773417-773421](../../../../../../reference/runtime/host-main.cjs#L773417-L773421) | `method` | yes | `deps, args` |
| [evaluation:572643-572647](../../../../../../reference/runtime/sand-eval-runner.cjs#L572643-L572647) | `method` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773417-773421](../../../../../../reference/runtime/host-main.cjs#L773417-L773421) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:572643-572647](../../../../../../reference/runtime/sand-eval-runner.cjs#L572643-L572647) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:773417

Calls written directly in this body: `_MeetingsTools.joiningNote`, `_MeetingsTools.renderRow`, `_MeetingsTools.unknownMeeting`, `deps.meetings.leaveMeeting`.

SHA-256 of the source span: `4e68774288cbeef1b391f8cd1f017da1d3667a90589b239c0aef362cf8f73955`.

### evaluation:572643

Calls written directly in this body: `_MeetingsTools.joiningNote`, `_MeetingsTools.renderRow`, `_MeetingsTools.unknownMeeting`, `deps.meetings.leaveMeeting`.

SHA-256 of the source span: `4e68774288cbeef1b391f8cd1f017da1d3667a90589b239c0aef362cf8f73955`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
