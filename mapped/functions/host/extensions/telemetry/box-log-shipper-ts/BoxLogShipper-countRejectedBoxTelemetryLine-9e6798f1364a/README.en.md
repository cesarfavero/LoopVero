# `BoxLogShipper.countRejectedBoxTelemetryLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731084-731087](../../../../../../../reference/runtime/host-main.cjs#L731084-L731087) | `method` | no | `reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731084-731087](../../../../../../../reference/runtime/host-main.cjs#L731084-L731087) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:731084

Calls written directly in this body: `saturatingAdd`.

Assignment or increment targets: `tally.total`.

SHA-256 of the source span: `3361849df84b8361cbdef230430a41d8cca0f298c7ac01e3c3dc460e6543180c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
