# `OnePasswordBrokerService.awaitDelivery`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550745-550758](../../../../../../../reference/runtime/host-main.cjs#L550745-L550758) | `method` | yes | `read2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550745-550758](../../../../../../../reference/runtime/host-main.cjs#L550745-L550758) | 3 | 0 | 1 | 2 | 1 | 1 |

### host:550745

Calls written directly in this body: `Promise.withResolvers`, `matches`, `this.deliveryGrace.run`.

Assignment or increment targets: `this.deliveryArrived`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `51baf695003cf2a6da56cc5b105d1f99ae28ac6a81803aa3adc2de69550dcfbe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
