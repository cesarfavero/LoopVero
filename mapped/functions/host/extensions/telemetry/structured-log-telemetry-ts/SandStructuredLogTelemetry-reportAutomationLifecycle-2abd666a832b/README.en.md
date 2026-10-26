# `SandStructuredLogTelemetry.reportAutomationLifecycle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473401-473421](../../../../../../../reference/runtime/host-main.cjs#L473401-L473421) | `method` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473401-473421](../../../../../../../reference/runtime/host-main.cjs#L473401-L473421) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473401

Calls written directly in this body: `brandedOrInvalidId`, `logFields`, `this.enqueue`.

SHA-256 of the source span: `a0776f3c16a636337d7242d56abce2b5e9f486d4428d237c05d809edb579c0e2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
