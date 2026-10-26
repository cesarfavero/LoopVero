# `webauthnProxyTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/webauthn-proxy-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/webauthn-proxy-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472579-472595](../../../../../../../reference/runtime/host-main.cjs#L472579-L472595) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472579-472595](../../../../../../../reference/runtime/host-main.cjs#L472579-L472595) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:472579

Calls written directly in this body: `Math.round`, `brandedId`, `causeError`, `logFields`, `sandErrorTags`.

SHA-256 of the source span: `a89be960950eb2a1e27d521ea4a959680e9eaecee8f2a99c657f4ff193e82382`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
