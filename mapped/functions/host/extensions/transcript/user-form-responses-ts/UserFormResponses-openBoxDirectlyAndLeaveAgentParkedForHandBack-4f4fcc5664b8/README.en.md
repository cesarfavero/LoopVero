# `UserFormResponses.openBoxDirectlyAndLeaveAgentParkedForHandBack`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/user-form-responses.ts` · [Module README](../../../../../../modules/host/extensions/transcript/user-form-responses-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740711-740733](../../../../../../../reference/runtime/host-main.cjs#L740711-L740733) | `method` | yes | `sessionId, form` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740711-740733](../../../../../../../reference/runtime/host-main.cjs#L740711-L740733) | 3 | 0 | 1 | 1 | 0 | 0 |

### host:740711

Calls written directly in this body: `Date.now`, `createSendMessageEntry`, `form.instruction.trim`, `getTranscript`, `nextEntryId`, `stampBoxRequestEntry`, `this.tm.roster.emitAgentUpdate`, `this.tm.sendPipeline.appendSendMessageEntry`, `this.userForms.startHandoff`.

SHA-256 of the source span: `6a1759870e7ff78774f92999df0e1a1f8652a42659fd03bfab6e99ff7dd7e428`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
