# `meetingsTurnTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773622-773645](../../../../../../reference/runtime/host-main.cjs#L773622-L773645) | `FunctionDeclaration` | no | `host` |
| [evaluation:572848-572871](../../../../../../reference/runtime/sand-eval-runner.cjs#L572848-L572871) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773622-773645](../../../../../../reference/runtime/host-main.cjs#L773622-L773645) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:572848-572871](../../../../../../reference/runtime/sand-eval-runner.cjs#L572848-L572871) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:773622

Calls written directly in this body: `createFindMeetingTool`, `createGetMeetingSummaryTool`, `createJoinMeetingTool`, `createLeaveMeetingTool`, `createListMeetingsTool`, `createReadMeetingTranscriptTool`, `createUpdateMeetingTool`.

SHA-256 of the source span: `d7e434ca63027cfacf8898818e44120ce48b9b5d5655bdc495db67fbec6eda84`.

### evaluation:572848

Calls written directly in this body: `createFindMeetingTool`, `createGetMeetingSummaryTool`, `createJoinMeetingTool`, `createLeaveMeetingTool`, `createListMeetingsTool`, `createReadMeetingTranscriptTool`, `createUpdateMeetingTool`.

SHA-256 of the source span: `d7e434ca63027cfacf8898818e44120ce48b9b5d5655bdc495db67fbec6eda84`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
