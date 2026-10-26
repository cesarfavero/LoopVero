# `_SandVoiceCallRecords.isToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/record.ts` · [Module README](../../../../../modules/shared/voice-call/record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490481-490484](../../../../../../reference/runtime/host-main.cjs#L490481-L490484) | `method` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490481-490484](../../../../../../reference/runtime/host-main.cjs#L490481-L490484) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:490481

Calls written directly in this body: `_SandVoiceCallRecords.isToolResult`, `isUnknownRecord2`.

SHA-256 of the source span: `89a2529f102e4f5f313f6b9f12aa8383caf61d0309e705743366f02dceec5004`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
