# `UserFormResponses.locatePendingForm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/user-form-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/user-form-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740734-740749](../../../../../../../reference/runtime/host-main.cjs#L740734-L740749) | `method` | yes | `entryId, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740734-740749](../../../../../../../reference/runtime/host-main.cjs#L740734-L740749) | 3 | 0 | 1 | 3 | 0 | 0 |

### host:740734

Calls written directly in this body: `findEntry`, `parseAgentId`, `this.tm.groupChat.isGroupSession`, `this.tm.sessions.ensureActionTarget`.

SHA-256 of the source span: `3b8e411389d785d068ddd23e33c5a2f45bb481f45a168084a2f17b8892701cdd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
