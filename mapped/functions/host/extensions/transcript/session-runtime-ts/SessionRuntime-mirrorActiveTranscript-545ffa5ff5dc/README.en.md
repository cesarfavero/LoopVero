# `SessionRuntime.mirrorActiveTranscript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737977-737983](../../../../../../../reference/runtime/host-main.cjs#L737977-L737983) | `method` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737977-737983](../../../../../../../reference/runtime/host-main.cjs#L737977-L737983) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:737977

Calls written directly in this body: `setTranscriptSource`, `this.storedIdsAtLastDuplicate`.

Assignment or increment targets: `this.inMemoryTranscriptAgentId`.

SHA-256 of the source span: `c92c61aad74ed3426c170ce0df700d69338539531c5d0fb4980dbab3a1e854bb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
