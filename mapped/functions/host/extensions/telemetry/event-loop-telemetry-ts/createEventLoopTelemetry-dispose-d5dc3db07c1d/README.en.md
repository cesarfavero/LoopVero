# `createEventLoopTelemetry/dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/event-loop-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/event-loop-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:456310-456314](../../../../../../../reference/runtime/host-main.cjs#L456310-L456314) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456310-456314](../../../../../../../reference/runtime/host-main.cjs#L456310-L456314) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:456310

Calls written directly in this body: `monitor.disable`.

Assignment or increment targets: `disposed`.

SHA-256 of the source span: `a4ac7301a7fdf58d04b692965dc60da801209c75b5f085a8f58fd8da8748d64c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
