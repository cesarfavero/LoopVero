# `GroupChatGlue.createGroup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/group-chat-glue.ts` · [Module README](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738416-738429](../../../../../../../reference/runtime/host-main.cjs#L738416-L738429) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738416-738429](../../../../../../../reference/runtime/host-main.cjs#L738416-L738429) | 0 | 0 | 4 | 1 | 0 | 0 |

### host:738416

Calls written directly in this body: `this.finalizedSummary`, `this.resolveGroupMemberIds`, `this.sealGroup`, `this.tm.createAgent`, `this.tm.roster.emitAgents`.

SHA-256 of the source span: `5f8b51f1b4619f86cdeb616aefb6b7909dd95bb8f77f34837ade2b89f2f4c9a5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
