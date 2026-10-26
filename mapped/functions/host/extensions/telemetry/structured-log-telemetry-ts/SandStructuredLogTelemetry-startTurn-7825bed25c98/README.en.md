# `SandStructuredLogTelemetry.startTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472808-472817](../../../../../../../reference/runtime/host-main.cjs#L472808-L472817) | `method` | no | `start` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472808-472817](../../../../../../../reference/runtime/host-main.cjs#L472808-L472817) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:472808

Calls written directly in this body: `beginTurnBotBlock`, `new SandTurnTelemetryImpl`, `this.activeTurnsByConversation.set`.

SHA-256 of the source span: `1a1757d645fe5841f9a70c1f8d4fe915a2121e369b62a6a3bdb5f0ef2d152fd7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
