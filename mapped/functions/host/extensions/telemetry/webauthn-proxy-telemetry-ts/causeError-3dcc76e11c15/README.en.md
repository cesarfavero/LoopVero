# `causeError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/webauthn-proxy-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/webauthn-proxy-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472555-472578](../../../../../../../reference/runtime/host-main.cjs#L472555-L472578) | `FunctionDeclaration` | no | `cause, rawDomErrorName, rawSignErrorClass` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472555-472578](../../../../../../../reference/runtime/host-main.cjs#L472555-L472578) | 7 | 0 | 0 | 7 | 0 | 0 |

### host:472555

Calls written directly in this body: `SandError.webauthnCeremonyTimedOut`, `SandError.webauthnConsentDeclined`, `SandError.webauthnDesktopFailed`, `SandError.webauthnDispatchFailed`, `SandError.webauthnNoProvider`, `SandError.webauthnProviderStale`, `SandError.webauthnSignFailed`, `brandedDomError`, `brandedSignErrorClass`.

SHA-256 of the source span: `3378c97e691b7d2bbc591c754b9c802cd2e9c3790d7241e859f5d53769fb1877`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
