# `SessionRuntime.getAgentTranscript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738187-738192](../../../../../../../reference/runtime/host-main.cjs#L738187-L738192) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738187-738192](../../../../../../../reference/runtime/host-main.cjs#L738187-L738192) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:738187

Calls written directly in this body: `getTranscript`, `this.tm.sessionStore.getAgentTranscriptEntries`.

SHA-256 of the source span: `9b16b9b7f941fd5a8e1c1a10b5d674ae09c76f5c95c3b9344675b3234843a047`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
