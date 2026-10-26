# `BoxLogShipper.maybeRetryOffsetSaveFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731226-731231](../../../../../../../reference/runtime/host-main.cjs#L731226-L731231) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731226-731231](../../../../../../../reference/runtime/host-main.cjs#L731226-L731231) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:731226

Calls written directly in this body: `this.clock.monotonicNow`, `this.reportOffsetSaveFailure`.

SHA-256 of the source span: `9d1a77e931c3158327a097b8b0d0ee57cee6324884f37cde380ee5a8d2c47dd8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
