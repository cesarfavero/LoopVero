# `sessionDiagnosticTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/session-diagnostic-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/session-diagnostic-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472290-472325](../../../../../../../reference/runtime/host-main.cjs#L472290-L472325) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472290-472325](../../../../../../../reference/runtime/host-main.cjs#L472290-L472325) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:472290

Calls written directly in this body: `WARN_KINDS3.has`, `brandedErrorTag`, `brandedId`, `brandedOrInvalidId`, `logFields`.

SHA-256 of the source span: `71464c7b6bfd9e5c130552f3166b5702c1ecbc156be33b241cc1d09c9a42bed6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
