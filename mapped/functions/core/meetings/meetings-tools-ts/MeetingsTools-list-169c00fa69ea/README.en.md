# `_MeetingsTools.list`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773422-773427](../../../../../../reference/runtime/host-main.cjs#L773422-L773427) | `method` | yes | `deps, args` |
| [evaluation:572648-572653](../../../../../../reference/runtime/sand-eval-runner.cjs#L572648-L572653) | `method` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773422-773427](../../../../../../reference/runtime/host-main.cjs#L773422-L773427) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:572648-572653](../../../../../../reference/runtime/sand-eval-runner.cjs#L572648-L572653) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:773422

Calls written directly in this body: `_MeetingsTools.pageQuery`, `_MeetingsTools.renderList`, `deps.meetings.listMeetings`.

SHA-256 of the source span: `4eee505d916923e65f4de448deceea5b2c0c719e2374410893bcc5576778903e`.

### evaluation:572648

Calls written directly in this body: `_MeetingsTools.pageQuery`, `_MeetingsTools.renderList`, `deps.meetings.listMeetings`.

SHA-256 of the source span: `4eee505d916923e65f4de448deceea5b2c0c719e2374410893bcc5576778903e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
