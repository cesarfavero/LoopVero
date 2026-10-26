# `_SandVoiceCallRecords.nudge`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/record.ts` · [Module README](../../../../../modules/shared/voice-call/record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490430-490439](../../../../../../reference/runtime/host-main.cjs#L490430-L490439) | `method` | no | `{     id,     request: request5,     atMs,     direction,     answer = null,     answeredAtMs = null   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490430-490439](../../../../../../reference/runtime/host-main.cjs#L490430-L490439) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:490430

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `00e80592fc37e9b9daa84c9e83b6d5a7c316bdb6e0e11179a30ce0e76b32e83d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
