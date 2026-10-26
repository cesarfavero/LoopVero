# `BoxLogShipper.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730817-730835](../../../../../../../reference/runtime/host-main.cjs#L730817-L730835) | `method` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730817-730835](../../../../../../../reference/runtime/host-main.cjs#L730817-L730835) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:730817

Calls written directly in this body: `new Set`.

Assignment or increment targets: `this.clock`, `this.excludeSourcePrefixes`, `this.logDir`, `this.maxBytesPerReadPerFile`, `this.maxLagBytes`, `this.maxLineBytes`, `this.maxLinesPerPoll`, `this.offsetsPath`, `this.openFile`, `this.polling`, `this.reportBatch`, `this.reportBoxLogShip`, `this.reportHostLog`, `this.skip`, `this.statFile`, `this.subdirPattern`, `this.writeOffsets`.

SHA-256 of the source span: `6d2999e498b400464a6f3dcc5a39e8084bf1c4a4685acdbe716e421fd6ec83cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
