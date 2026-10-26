# `SessionRuntime.setActiveTranscript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737961-737964](../../../../../../../reference/runtime/host-main.cjs#L737961-L737964) | `method` | no | `agentId, entries` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737961-737964](../../../../../../../reference/runtime/host-main.cjs#L737961-L737964) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:737961

Calls written directly in this body: `setTranscript`, `this.storedIdsAtLastDuplicate`.

Assignment or increment targets: `this.inMemoryTranscriptAgentId`.

SHA-256 of the source span: `d494867d05fdbd144793aedc2c455f55ecbeb09fb1012ff212e89b91fa74ab1a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
