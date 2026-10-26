# `HostTelemetryService.api/createHostLifecycleProgress`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732097-732102](../../../../../../../reference/runtime/host-main.cjs#L732097-L732102) | `ArrowFunctionExpression` | no | `startedAt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732097-732102](../../../../../../../reference/runtime/host-main.cjs#L732097-L732102) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:732097 uses an implicit arrow-function return.

### host:732097

Calls written directly in this body: `new HostLifecycleProgress`.

SHA-256 of the source span: `6b0ae9d0083bf8b60bbc5625ca0b7b0f8ea5483eca8a08eb2a60f8fed0c6f296`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
