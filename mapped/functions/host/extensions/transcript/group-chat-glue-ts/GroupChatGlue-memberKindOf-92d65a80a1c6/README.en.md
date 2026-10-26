# `GroupChatGlue.memberKindOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/group-chat-glue.ts` · [Module README](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738606-738623](../../../../../../../reference/runtime/host-main.cjs#L738606-L738623) | `method` | no | `memberId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738606-738623](../../../../../../../reference/runtime/host-main.cjs#L738606-L738623) | 5 | 0 | 0 | 3 | 4 | 1 |

### host:738606

Calls written directly in this body: `getSandProfilePath`, `isRefusedSandDataFile`, `new SandGroupMemberHarnessError`, `parseProfileJson`, `readSandDataFileSync`, `this.tm.sessionStore.getAgentDir`.

Assignment or increment targets: `raw`.

Explicit throw targets: `SandGroupMemberHarnessError`, `error64`.

SHA-256 of the source span: `f9efb358ef93e321b782044c70b8b216edd6637ee059bb7dfc04afd2dbe29a36`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
