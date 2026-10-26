# `SandTurnTelemetryImpl.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473840-473846](../../../../../../../reference/runtime/host-main.cjs#L473840-L473846) | `method` | no | `telemetry, start, onFinalized` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473840-473846](../../../../../../../reference/runtime/host-main.cjs#L473840-L473846) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:473840

Calls written directly in this body: `this.emitStart`.

Assignment or increment targets: `this.model`, `this.onFinalized`, `this.start`, `this.telemetry`.

SHA-256 of the source span: `3ad9606f463ae9160b959f95ac2025c2c986a999ecf94bc26305db257b7d5cd5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
