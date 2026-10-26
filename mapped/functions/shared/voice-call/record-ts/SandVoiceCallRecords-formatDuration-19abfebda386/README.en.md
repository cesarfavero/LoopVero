# `_SandVoiceCallRecords.formatDuration`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/record.ts` · [Module README](../../../../../modules/shared/voice-call/record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490508-490517](../../../../../../reference/runtime/host-main.cjs#L490508-L490517) | `method` | no | `durationMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490508-490517](../../../../../../reference/runtime/host-main.cjs#L490508-L490517) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:490508

Calls written directly in this body: `.padStart`, `Math.floor`, `Math.max`, `Math.round`, `String`.

SHA-256 of the source span: `acb5271284f31c58cac75526ae3ea73c1b5e7cc157645d87d4b408f03cfebd38`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
