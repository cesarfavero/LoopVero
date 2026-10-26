# `_SandVoiceCallRecords.isConversation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/record.ts` · [Module README](../../../../../modules/shared/voice-call/record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490473-490476](../../../../../../reference/runtime/host-main.cjs#L490473-L490476) | `method` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490473-490476](../../../../../../reference/runtime/host-main.cjs#L490473-L490476) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:490473

Calls written directly in this body: `Array.isArray`, `_SandVoiceCallRecords.isOverheardOrAbsent`, `_SandVoiceCallRecords.isToolCallsOrAbsent`, `isUnknownRecord2`, `value[computed].every`.

SHA-256 of the source span: `92df07fb646644d1fd9fd6c2fc885328cdde3a3189baed5f83eb0b6288e50b0a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
