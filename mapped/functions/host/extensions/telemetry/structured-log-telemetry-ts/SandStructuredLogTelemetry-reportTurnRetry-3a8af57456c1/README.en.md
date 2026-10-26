# `SandStructuredLogTelemetry.reportTurnRetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473449-473455](../../../../../../../reference/runtime/host-main.cjs#L473449-L473455) | `method` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473449-473455](../../../../../../../reference/runtime/host-main.cjs#L473449-L473455) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:473449

Calls written directly in this body: `.noteRetry`, `this.activeTurnsByConversation.get`, `this.enqueue`, `turnRetryTelemetry`.

SHA-256 of the source span: `f69b51686b2443a3a64f2bd2d7890cb432d8be3ac8e2eb58ee7c5faf7cdce1c9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
