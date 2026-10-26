# `OnePasswordBrokerService.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550632-550645](../../../../../../../reference/runtime/host-main.cjs#L550632-L550645) | `method` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550632-550645](../../../../../../../reference/runtime/host-main.cjs#L550632-L550645) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:550632

Calls written directly in this body: `createPollingPolicy2`, `createRetryPolicy`, `new BrokeredGrants`.

Assignment or increment targets: `this.browserWorkerPoll`, `this.discoverPorts`, `this.grants`, `this.now`, `this.options`, `this.pendingPoll`, `this.statusRetry`.

SHA-256 of the source span: `bffe28d2c834e2908045c67ccf3dea1ff38e457923c03a9a13432e553f768928`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
