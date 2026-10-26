# `BoxLogShipper.setOffset`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731127-731136](../../../../../../../reference/runtime/host-main.cjs#L731127-L731136) | `method` | no | `path33, offset2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731127-731136](../../../../../../../reference/runtime/host-main.cjs#L731127-L731136) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:731127

Calls written directly in this body: `this.offsets.get`, `this.offsets.set`, `this.pendingWindowStartedAtMs.delete`.

Assignment or increment targets: `this.isOffsetsDirty`, `this.offsetsRevision`.

SHA-256 of the source span: `d0e44f3e833bf87e9026626321013d47c1360058c837054a15096855b0a5c1d2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
