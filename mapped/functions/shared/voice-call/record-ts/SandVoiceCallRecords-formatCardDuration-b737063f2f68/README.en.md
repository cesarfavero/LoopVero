# `_SandVoiceCallRecords.formatCardDuration`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/record.ts` · [Module README](../../../../../modules/shared/voice-call/record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490518-490528](../../../../../../reference/runtime/host-main.cjs#L490518-L490528) | `method` | no | `durationMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490518-490528](../../../../../../reference/runtime/host-main.cjs#L490518-L490528) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:490518

Calls written directly in this body: `.padStart`, `Math.floor`, `Math.max`, `Math.round`, `String`.

SHA-256 of the source span: `c71b8640dff9782990ba3b5ad58c79d6b72d5d7f7e10e7239c4c41c3dcd402eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
