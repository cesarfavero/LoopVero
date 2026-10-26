# `_MeetingsTools.summary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773459-773463](../../../../../../reference/runtime/host-main.cjs#L773459-L773463) | `method` | yes | `deps, args` |
| [evaluation:572685-572689](../../../../../../reference/runtime/sand-eval-runner.cjs#L572685-L572689) | `method` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773459-773463](../../../../../../reference/runtime/host-main.cjs#L773459-L773463) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:572685-572689](../../../../../../reference/runtime/sand-eval-runner.cjs#L572685-L572689) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:773459

Calls written directly in this body: `_MeetingsTools.renderSummary`, `_MeetingsTools.unknownMeeting`, `deps.meetings.getMeeting`.

SHA-256 of the source span: `2f6295113c9fbee83cbbe4e39455e85a7e1dac8c720ea8946dc867673df97e62`.

### evaluation:572685

Calls written directly in this body: `_MeetingsTools.renderSummary`, `_MeetingsTools.unknownMeeting`, `deps.meetings.getMeeting`.

SHA-256 of the source span: `2f6295113c9fbee83cbbe4e39455e85a7e1dac8c720ea8946dc867673df97e62`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
