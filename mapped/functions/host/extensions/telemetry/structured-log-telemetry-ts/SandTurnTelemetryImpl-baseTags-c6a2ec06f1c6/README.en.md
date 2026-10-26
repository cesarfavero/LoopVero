# `SandTurnTelemetryImpl.baseTags`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473898-473905](../../../../../../../reference/runtime/host-main.cjs#L473898-L473905) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473898-473905](../../../../../../../reference/runtime/host-main.cjs#L473898-L473905) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:473898

Calls written directly in this body: `brandedId`, `brandedOrInvalidId`, `logFields`.

SHA-256 of the source span: `8f65f6c8895306c0b6c4f8549aa8bd30d48e7733d2fabc296df868ee4c2d4153`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
