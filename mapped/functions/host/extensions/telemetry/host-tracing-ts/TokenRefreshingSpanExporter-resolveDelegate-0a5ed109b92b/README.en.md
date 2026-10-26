# `TokenRefreshingSpanExporter.resolveDelegate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-tracing.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-tracing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731595-731623](../../../../../../../reference/runtime/host-main.cjs#L731595-L731623) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731595-731623](../../../../../../../reference/runtime/host-main.cjs#L731595-L731623) | 4 | 0 | 0 | 2 | 0 | 1 |

### host:731595

Calls written directly in this body: `.catch`, `new import_exporter_trace_otlp_proto.OTLPTraceExporter`, `previous.shutdown`, `this.getToken`.

Assignment or increment targets: `this.delegate`, `this.delegateToken`, `token`.

SHA-256 of the source span: `a0b61dd4cbabdc6075ad927d1b602a9e6b51b83fbbcf47349f70d8dc68a3821a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
