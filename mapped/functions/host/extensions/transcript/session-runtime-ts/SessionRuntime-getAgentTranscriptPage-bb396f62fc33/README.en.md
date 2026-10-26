# `SessionRuntime.getAgentTranscriptPage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738193-738195](../../../../../../../reference/runtime/host-main.cjs#L738193-L738195) | `method` | no | `agentId, query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738193-738195](../../../../../../../reference/runtime/host-main.cjs#L738193-L738195) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:738193

Calls written directly in this body: `.db.getTranscriptPage`, `this.resolveLiveSession`, `this.tm.sessionStore.readAgentTranscriptPage`.

SHA-256 of the source span: `a72c7875c8cf63ba16a6aaddeced6ba3ef849c0f1ebd3188e69af1201662c569`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
