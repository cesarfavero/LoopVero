# `localExecProviderTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/local-exec-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/local-exec-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472120-472144](../../../../../../../reference/runtime/host-main.cjs#L472120-L472144) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472120-472144](../../../../../../../reference/runtime/host-main.cjs#L472120-L472144) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:472120

Calls written directly in this body: `Math.round`, `brandedId`, `logFields`.

SHA-256 of the source span: `1977d7c6b2e825c10d5b9b57966aee497e6725cab32ebf601ae231c583c2c1f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
