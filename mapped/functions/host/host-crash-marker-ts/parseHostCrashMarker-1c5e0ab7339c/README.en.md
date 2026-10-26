# `parseHostCrashMarker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-crash-marker.ts` · [Module README](../../../../modules/host/host-crash-marker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:471457-471499](../../../../../reference/runtime/host-main.cjs#L471457-L471499) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471457-471499](../../../../../reference/runtime/host-main.cjs#L471457-L471499) | 15 | 0 | 0 | 10 | 0 | 0 |

### host:471457

Calls written directly in this body: `Array.isArray`, `isFatalExitSignal`, `isNonNegativeFinite`, `parseFatalStartupMarker`, `parseJson`, `readCommonTimes`.

SHA-256 of the source span: `bdeaf37e69d2dbdb32ab4a6f6f46b89710f47aad3fa28a9006a80035737ea923`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
