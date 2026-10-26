# `GroupChatGlue.reportMemberTurnOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/group-chat-glue.ts` · [Module README](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738624-738633](../../../../../../../reference/runtime/host-main.cjs#L738624-L738633) | `method` | no | `roomSession, memberId, outcome, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738624-738633](../../../../../../../reference/runtime/host-main.cjs#L738624-L738633) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:738624

Calls written directly in this body: `classifyAgentError`, `this.memberKindOf`, `this.tm.telemetry.reportGroupMemberTurnOutcome`.

SHA-256 of the source span: `1780c834fc6a7c6054df706e441feec9af63e1570dedd9d2753f3ee7d9cdabe5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
