# `SandStructuredLogTelemetry.reportToolCallError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472818-472832](../../../../../../../reference/runtime/host-main.cjs#L472818-L472832) | `method` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472818-472832](../../../../../../../reference/runtime/host-main.cjs#L472818-L472832) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:472818

Calls written directly in this body: `brandedConnectorTag`, `brandedErrorTag`, `brandedId`, `brandedOrInvalidId`, `cappedToolCallMs`, `logFields`, `this.enqueue`.

SHA-256 of the source span: `273dfb1ce5b08d83f4e4a01b91893399943daaa578f4dcb9bf047902564b9cbe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
