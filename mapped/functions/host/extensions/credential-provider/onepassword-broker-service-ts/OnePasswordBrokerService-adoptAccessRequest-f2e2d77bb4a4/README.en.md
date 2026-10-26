# `OnePasswordBrokerService.adoptAccessRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550954-550968](../../../../../../../reference/runtime/host-main.cjs#L550954-L550968) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550954-550968](../../../../../../../reference/runtime/host-main.cjs#L550954-L550968) | 5 | 0 | 3 | 5 | 0 | 0 |

### host:550954

Calls written directly in this body: `.requests.get`, `.requests.set`, `this.agent`, `this.pickCdpPort`, `this.sessionMaterial`, `this.windowFor`.

SHA-256 of the source span: `e0ea7fa4b3e6967d46df84c4e6f59ff0438fc95a644fe04c74585fe739f5f753`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
