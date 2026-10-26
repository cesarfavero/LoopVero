# `SandStructuredLogTelemetry.reportHostCrash`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473584-473586](../../../../../../../reference/runtime/host-main.cjs#L473584-L473586) | `method` | no | `kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473584-473586](../../../../../../../reference/runtime/host-main.cjs#L473584-L473586) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473584

Calls written directly in this body: `logFields`, `this.enqueue`.

SHA-256 of the source span: `b06a855a6864bc0a166e9d0afffd8967f93c6820541131a9baf8a307dbb7f677`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
