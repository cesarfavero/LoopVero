# `OnePasswordBrokerService.receiveSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550685-550690](../../../../../../../reference/runtime/host-main.cjs#L550685-L550690) | `method` | no | `material` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550685-550690](../../../../../../../reference/runtime/host-main.cjs#L550685-L550690) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:550685

Calls written directly in this body: `this.deliveryArrived`, `this.grants.replace`, `this.grants.retainFor`.

Assignment or increment targets: `this.delivered`.

SHA-256 of the source span: `d8292869e45ef34f88c845744d8e50bfc2004cee717f818580dbc5614b368232`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
