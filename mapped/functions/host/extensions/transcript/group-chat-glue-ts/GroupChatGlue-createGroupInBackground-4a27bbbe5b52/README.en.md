# `GroupChatGlue.createGroupInBackground`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/group-chat-glue.ts` · [Module README](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738430-738440](../../../../../../../reference/runtime/host-main.cjs#L738430-L738440) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738430-738440](../../../../../../../reference/runtime/host-main.cjs#L738430-L738440) | 0 | 0 | 3 | 1 | 0 | 0 |

### host:738430

Calls written directly in this body: `this.finalizedSummary`, `this.resolveGroupMemberIds`, `this.sealGroup`, `this.tm.createBackgroundAgent`, `this.tm.roster.emitAgents`.

SHA-256 of the source span: `46e0149642f0906fdd878898f9d6d17a1c2e6342dbfac0c7ef59afdc0b6a434b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
