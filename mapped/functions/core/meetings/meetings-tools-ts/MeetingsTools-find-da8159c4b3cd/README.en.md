# `_MeetingsTools.find`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773428-773437](../../../../../../reference/runtime/host-main.cjs#L773428-L773437) | `method` | yes | `deps, args` |
| [evaluation:572654-572663](../../../../../../reference/runtime/sand-eval-runner.cjs#L572654-L572663) | `method` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773428-773437](../../../../../../reference/runtime/host-main.cjs#L773428-L773437) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:572654-572663](../../../../../../reference/runtime/sand-eval-runner.cjs#L572654-L572663) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:773428

Calls written directly in this body: `_MeetingsTools.pageQuery`, `_MeetingsTools.renderFind`, `deps.meetings.findMeetings`.

SHA-256 of the source span: `79e45457d786bcad597717d0a6bec3548e879579091f802d2aa5ab9d66fc4066`.

### evaluation:572654

Calls written directly in this body: `_MeetingsTools.pageQuery`, `_MeetingsTools.renderFind`, `deps.meetings.findMeetings`.

SHA-256 of the source span: `79e45457d786bcad597717d0a6bec3548e879579091f802d2aa5ab9d66fc4066`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
