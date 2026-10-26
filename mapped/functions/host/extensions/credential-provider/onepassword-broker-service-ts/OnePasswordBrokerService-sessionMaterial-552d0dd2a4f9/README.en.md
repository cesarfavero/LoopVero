# `OnePasswordBrokerService.sessionMaterial`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550691-550706](../../../../../../../reference/runtime/host-main.cjs#L550691-L550706) | `method` | yes | `force = false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550691-550706](../../../../../../../reference/runtime/host-main.cjs#L550691-L550706) | 4 | 0 | 2 | 3 | 0 | 0 |

### host:550691

Calls written directly in this body: `.finally`, `this.fetchSessionMaterial`, `this.now`.

Assignment or increment targets: `this.delivered`, `this.material`, `this.sessionFetch`.

SHA-256 of the source span: `2141118358915af71f1e781b0463d90006f20608cd0784b724e0dbab488dab02`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
