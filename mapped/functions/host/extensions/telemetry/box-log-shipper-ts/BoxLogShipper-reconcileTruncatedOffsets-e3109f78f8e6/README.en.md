# `BoxLogShipper.reconcileTruncatedOffsets`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730977-730990](../../../../../../../reference/runtime/host-main.cjs#L730977-L730990) | `method` | no | `files` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730977-730990](../../../../../../../reference/runtime/host-main.cjs#L730977-L730990) | 2 | 1 | 0 | 0 | 0 | 0 |

### host:730977

Calls written directly in this body: `this.offsets.get`, `this.pendingDeliveryWindows.get`, `this.pendingWindowStartedAtMs.delete`, `this.setOffset`.

Assignment or increment targets: `pending.invalidated`.

SHA-256 of the source span: `f87c5ae96f2552881fe1893261d2c9aa34f0110dfae75f00ab97ca0621f80379`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
