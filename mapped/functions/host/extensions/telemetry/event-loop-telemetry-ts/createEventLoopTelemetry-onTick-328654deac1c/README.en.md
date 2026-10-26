# `createEventLoopTelemetry/onTick`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/event-loop-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/event-loop-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:456288-456309](../../../../../../../reference/runtime/host-main.cjs#L456288-L456309) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456288-456309](../../../../../../../reference/runtime/host-main.cjs#L456288-L456309) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:456288

Calls written directly in this body: `Number.isFinite`, `import_node_perf_hooks.performance.eventLoopUtilization`, `monitor.percentile`, `monitor.reset`, `now`, `options2.report`, `resolveWindowEmit`, `toMs`.

Assignment or increment targets: `lastUtilization`, `windowIndex`, `windowStartedAtMs`.

SHA-256 of the source span: `5091d9dd7f0c9717957a16a05269f279011ed031c79f87ddd67b54488df9b508`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
