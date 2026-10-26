# `isRetryablePrivacyModeLookupError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/privacy-mode/privacy-mode-service.ts` · [Module README](../../../../../../modules/host/extensions/privacy-mode/privacy-mode-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706602-706604](../../../../../../../reference/runtime/host-main.cjs#L706602-L706604) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706602-706604](../../../../../../../reference/runtime/host-main.cjs#L706602-L706604) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706602

Calls written directly in this body: `error64.metadata.has`.

SHA-256 of the source span: `2281dd0560d690f8ca2edaa00e29ca5c70ab503a63027a7dbb5e308e1d329488`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
