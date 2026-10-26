# `normalizeSandVoiceLanguage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/voices.ts` · [Module README](../../../../../modules/shared/voice-call/voices-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490783-490798](../../../../../../reference/runtime/host-main.cjs#L490783-L490798) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490783-490798](../../../../../../reference/runtime/host-main.cjs#L490783-L490798) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:490783

Calls written directly in this body: `SAND_VOICE_LANGUAGES.filter`, `SAND_VOICE_LANGUAGES.find`, `lowered.split`, `raw.trim`, `trimmed.toLowerCase`.

SHA-256 of the source span: `1d40f891a13bd54e8e0106821924e475354f7b0c05474274d42a9358bff9e4e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
