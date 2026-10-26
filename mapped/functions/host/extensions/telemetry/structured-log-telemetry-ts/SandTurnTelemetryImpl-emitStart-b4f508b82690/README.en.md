# `SandTurnTelemetryImpl.emitStart`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473906-473910](../../../../../../../reference/runtime/host-main.cjs#L473906-L473910) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473906-473910](../../../../../../../reference/runtime/host-main.cjs#L473906-L473910) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:473906

Calls written directly in this body: `this.baseTags`, `this.telemetry.emitTurnEvent`.

Assignment or increment targets: `this.startEmitted`.

SHA-256 of the source span: `05b8d6d9da58210cb0ca313480e09486c7d7255870e2c470baacb06b74bb4a44`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
