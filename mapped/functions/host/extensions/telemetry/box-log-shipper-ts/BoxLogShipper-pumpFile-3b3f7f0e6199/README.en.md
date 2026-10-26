# `BoxLogShipper.pumpFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730991-731060](../../../../../../../reference/runtime/host-main.cjs#L730991-L731060) | `method` | yes | `file2, budget` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730991-731060](../../../../../../../reference/runtime/host-main.cjs#L730991-L731060) | 14 | 1 | 3 | 5 | 0 | 0 |

### host:730991

Calls written directly in this body: `.toString`, `Buffer.alloc`, `Math.min`, `buffer.subarray`, `chunk.indexOf`, `chunk.lastIndexOf`, `chunk.subarray`, `handle.close`, `handle.read`, `line.endsWith`, `line.slice`, `records2.push`, `this.offsets.get`, `this.openFile`, `this.pendingDeliveryWindows.has`, `this.pendingWindowStartedAtMs.delete`, `this.reportDeliveryWindow`, `this.toTelemetryRecord`.

Assignment or increment targets: `candidateEndOffset`, `cursor`, `from2`, `line`, `processed`.

SHA-256 of the source span: `61244cfbe2d3bac3e9b7ab877cf42296ec5ac407cd303b1dc8e1dae7ea9c8223`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
