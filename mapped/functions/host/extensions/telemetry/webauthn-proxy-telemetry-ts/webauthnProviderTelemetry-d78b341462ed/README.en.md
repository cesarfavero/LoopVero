# `webauthnProviderTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/webauthn-proxy-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/webauthn-proxy-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472596-472617](../../../../../../../reference/runtime/host-main.cjs#L472596-L472617) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472596-472617](../../../../../../../reference/runtime/host-main.cjs#L472596-L472617) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:472596

Calls written directly in this body: `Math.round`, `brandedId`, `logFields`.

SHA-256 of the source span: `346b675e39ff7c0ffb2d8d955b4e71e84221bf522c81068728dcef5d5f7811db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
