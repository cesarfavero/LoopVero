# `SandStructuredLogTelemetry.reportComputerOperation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472906-472931](../../../../../../../reference/runtime/host-main.cjs#L472906-L472931) | `method` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472906-472931](../../../../../../../reference/runtime/host-main.cjs#L472906-L472931) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:472906

Calls written directly in this body: `brandLiteralEnum`, `brandedId`, `cappedToolCallMs`, `logFields`, `this.enqueue`.

SHA-256 of the source span: `a64754ac0c759fe1ba3ab42209486d275b7772e6ec3e6e339675aceb0ec2c1fa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
