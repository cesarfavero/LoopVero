# `HostTelemetryService.forwardDesktopHealth/emit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732281-732281](../../../../../../../reference/runtime/host-main.cjs#L732281-L732281) | `ArrowFunctionExpression` | no | `level, metadata2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732281-732281](../../../../../../../reference/runtime/host-main.cjs#L732281-L732281) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:732281 uses an implicit arrow-function return.

### host:732281

Calls written directly in this body: `this.logs.reportDesktopHealth`.

SHA-256 of the source span: `639e366d1180e67e62ddd65adba192a9909b6e7db79fbcd29f736bcc1d83b379`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
