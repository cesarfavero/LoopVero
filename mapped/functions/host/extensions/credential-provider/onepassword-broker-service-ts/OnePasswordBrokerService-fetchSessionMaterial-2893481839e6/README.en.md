# `OnePasswordBrokerService.fetchSessionMaterial`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550707-550744](../../../../../../../reference/runtime/host-main.cjs#L550707-L550744) | `method` | yes | `forceRefresh` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550707-550744](../../../../../../../reference/runtime/host-main.cjs#L550707-L550744) | 7 | 0 | 2 | 6 | 0 | 1 |

### host:550707

Calls written directly in this body: `errorLogTag`, `this.awaitDelivery`, `this.grants.clear`, `this.grants.noteSessionRead`, `this.options.log`, `this.options.readSession`.

Assignment or increment targets: `read2`, `this.material`.

SHA-256 of the source span: `09c044a4443dfd40db9d164f9487f23bd9699b74e7aa8ed7f9c4264a878438a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
