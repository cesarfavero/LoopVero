# `HostTelemetryService.start/report`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732051-732065](../../../../../../../reference/runtime/host-main.cjs#L732051-L732065) | `ArrowFunctionExpression` | no | `summary, trigger2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732051-732065](../../../../../../../reference/runtime/host-main.cjs#L732051-L732065) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:732051

Calls written directly in this body: `this.logs.reportHostEventLoop`, `this.options.experiments.checkFeatureGate`, `this.pressureProfiler.onPressure`.

SHA-256 of the source span: `8f84b7b72bf4588c2a18850e98f30a6162021d7a7daf1c1cc7b06df3978205b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
