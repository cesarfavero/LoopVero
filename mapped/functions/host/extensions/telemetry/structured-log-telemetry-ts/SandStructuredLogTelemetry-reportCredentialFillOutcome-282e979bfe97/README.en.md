# `SandStructuredLogTelemetry.reportCredentialFillOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473067-473141](../../../../../../../reference/runtime/host-main.cjs#L473067-L473141) | `method` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473067-473141](../../../../../../../reference/runtime/host-main.cjs#L473067-L473141) | 14 | 0 | 0 | 0 | 0 | 0 |

### host:473067

Calls written directly in this body: `Math.floor`, `Math.max`, `Math.min`, `Math.round`, `SandError.credentialSubmitFailed`, `booleanTag`, `brandLiteralEnum`, `brandedErrorClass`, `brandedId`, `logFields`, `sandErrorTags`, `this.enqueue`.

SHA-256 of the source span: `3c43e5f5e5c6e340f8809181cfa7e4606a8848f786023e7b7e40621d23eb70ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
