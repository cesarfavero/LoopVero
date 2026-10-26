# `BoxLogShipper.reportOffsetSaveFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731248-731266](../../../../../../../reference/runtime/host-main.cjs#L731248-L731266) | `method` | no | `failure3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731248-731266](../../../../../../../reference/runtime/host-main.cjs#L731248-L731266) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:731248

Calls written directly in this body: `this.reportBoxLogShip`.

Assignment or increment targets: `failure3.reportState`.

SHA-256 of the source span: `62d2d0e9fb22d805dd2cb69875a6072e76fd08f98822e6c7b7786fef95268c2d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
