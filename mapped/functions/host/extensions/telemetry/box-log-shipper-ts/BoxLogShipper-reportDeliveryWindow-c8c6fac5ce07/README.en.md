# `BoxLogShipper.reportDeliveryWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731099-731115](../../../../../../../reference/runtime/host-main.cjs#L731099-L731115) | `method` | no | `path33, candidateEndOffset, records2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731099-731115](../../../../../../../reference/runtime/host-main.cjs#L731099-L731115) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:731099

Calls written directly in this body: `this.clock.monotonicNow`, `this.pendingDeliveryWindows.set`, `this.pendingWindowStartedAtMs.has`, `this.pendingWindowStartedAtMs.set`, `this.reportBatch`, `this.setOffset`.

SHA-256 of the source span: `2f4bccf1b532b9c4ab320fe2354f3f13a59de918adc5b955131b05603652f930`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
