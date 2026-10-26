# `normalizeSandVoiceId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/voices.ts` · [Module README](../../../../../modules/shared/voice-call/voices-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490722-490725](../../../../../../reference/runtime/host-main.cjs#L490722-L490725) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490722-490725](../../../../../../reference/runtime/host-main.cjs#L490722-L490725) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:490722

Calls written directly in this body: `.toLowerCase`, `SAND_VOICES.find`, `raw.trim`.

SHA-256 of the source span: `13adf270349cd5413c806ad8a2fc636b5668b3020e44efc419261ce6ca608ec5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
