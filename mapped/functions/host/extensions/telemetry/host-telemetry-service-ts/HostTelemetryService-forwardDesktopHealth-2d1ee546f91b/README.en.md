# `HostTelemetryService.forwardDesktopHealth`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732267-732294](../../../../../../../reference/runtime/host-main.cjs#L732267-L732294) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732267-732294](../../../../../../../reference/runtime/host-main.cjs#L732267-L732294) | 0 | 0 | 1 | 0 | 0 | 1 |

### host:732267

Calls written directly in this body: `forwardDesktopHealthWith`.

SHA-256 of the source span: `81c4ae3d5649c14f1434fde2347787c4ee4474fa801f9c8bd2918c6ebdde3d41`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
