# `BoxLogShipper.noteOffsetSaveFailed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731232-731247](../../../../../../../reference/runtime/host-main.cjs#L731232-L731247) | `method` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731232-731247](../../../../../../../reference/runtime/host-main.cjs#L731232-L731247) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:731232

Calls written directly in this body: `classifyOffsetSaveError`, `saturatingAdd`, `this.reportOffsetSaveFailure`.

Assignment or increment targets: `failure3.errorClass`, `failure3.failureCount`, `this.offsetSaveFailure`.

SHA-256 of the source span: `44898621a8b873288b119b5cfb2bda3b20a7b6be480dd10c6450dc517faac398`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
