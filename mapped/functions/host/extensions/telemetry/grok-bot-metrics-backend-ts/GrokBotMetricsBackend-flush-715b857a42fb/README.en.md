# `GrokBotMetricsBackend.flush`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/grok-bot-metrics-backend.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/grok-bot-metrics-backend-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730165-730189](../../../../../../../reference/runtime/host-main.cjs#L730165-L730189) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730165-730189](../../../../../../../reference/runtime/host-main.cjs#L730165-L730189) | 2 | 4 | 1 | 1 | 0 | 0 |

### host:730165

Calls written directly in this body: `Promise.allSettled`, `client.reportDistribution`, `client.reportGauge`, `client.reportIncrement`, `drainDistributions`, `drainNamedMetrics`, `sends.push`, `this.distributionBuffer.clear`, `this.distributionBuffer.values`, `this.gaugeBuffer.clear`, `this.gaugeBuffer.values`, `this.getOrCreateClient`, `this.incrementBuffer.clear`, `this.incrementBuffer.values`, `this.options.onFlushError`.

SHA-256 of the source span: `e442d849e5dbbe4323111ecb5062fbf852cfeeeba8eed89b5ee592983db0355f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
