# `BoxLogShipper.maybeReportProgress`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731175-731204](../../../../../../../reference/runtime/host-main.cjs#L731175-L731204) | `method` | no | `files` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731175-731204](../../../../../../../reference/runtime/host-main.cjs#L731175-L731204) | 1 | 2 | 0 | 1 | 0 | 0 |

### host:731175

Calls written directly in this body: `Math.max`, `Math.min`, `saturatingAdd`, `this.clock.monotonicNow`, `this.offsets.get`, `this.pendingWindowStartedAtMs.values`, `this.reportBoxLogShip`, `toNonnegativeSafeInteger`.

Assignment or increment targets: `bytesDelivered`, `bytesWritten`, `oldestPendingWindowAgeMs`, `this.lastProgressReportAtMs`.

SHA-256 of the source span: `22a304bddb2cc4173287bada5b7e69d72ff9bfa63da983f64a1198d08476dc4d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
