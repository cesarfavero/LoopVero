# `_SandVoiceCallRecords.summarize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/record.ts` · [Module README](../../../../../modules/shared/voice-call/record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490495-490507](../../../../../../reference/runtime/host-main.cjs#L490495-L490507) | `method` | no | `record3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490495-490507](../../../../../../reference/runtime/host-main.cjs#L490495-L490507) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:490495

Calls written directly in this body: `record3.nudges.filter`.

SHA-256 of the source span: `5c14d99d4b405e90627a8a06e8db8802ee5e31d11abb215f217bea477201a045`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
