# `SessionRuntime.clearActiveTranscript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737984-737987](../../../../../../../reference/runtime/host-main.cjs#L737984-L737987) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737984-737987](../../../../../../../reference/runtime/host-main.cjs#L737984-L737987) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:737984

Calls written directly in this body: `clearTranscript`.

Assignment or increment targets: `this.inMemoryTranscriptAgentId`.

SHA-256 of the source span: `1825f86d4f7137d2b18ab8cf8dfe00a02a14fc4f9d1bfd4faa48568d7f10bb3a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
