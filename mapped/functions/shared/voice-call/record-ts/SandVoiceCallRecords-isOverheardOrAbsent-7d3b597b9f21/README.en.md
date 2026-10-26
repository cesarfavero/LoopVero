# `_SandVoiceCallRecords.isOverheardOrAbsent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/record.ts` · [Module README](../../../../../modules/shared/voice-call/record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490492-490494](../../../../../../reference/runtime/host-main.cjs#L490492-L490494) | `method` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490492-490494](../../../../../../reference/runtime/host-main.cjs#L490492-L490494) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:490492

Calls written directly in this body: `Array.isArray`, `value.every`.

SHA-256 of the source span: `c5750d8a7acedd636cee138e8fe11a363f898c4c03c54c28b381119c6cb123dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
