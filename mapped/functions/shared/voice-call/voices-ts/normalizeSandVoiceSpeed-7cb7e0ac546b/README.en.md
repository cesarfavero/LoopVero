# `normalizeSandVoiceSpeed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/voices.ts` · [Module README](../../../../../modules/shared/voice-call/voices-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490767-490782](../../../../../../reference/runtime/host-main.cjs#L490767-L490782) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490767-490782](../../../../../../reference/runtime/host-main.cjs#L490767-L490782) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:490767

Calls written directly in this body: `Math.abs`, `Number.isFinite`, `Number.parseFloat`.

Assignment or increment targets: `closest`, `closestDistance`, `speed`.

SHA-256 of the source span: `98e0fbca15b9f5ea39824f3d41ec60ea760625ab14d8715b6cce08df74526c4a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
