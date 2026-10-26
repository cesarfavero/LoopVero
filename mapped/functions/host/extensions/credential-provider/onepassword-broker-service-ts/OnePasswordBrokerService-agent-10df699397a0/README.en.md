# `OnePasswordBrokerService.agent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550666-550673](../../../../../../../reference/runtime/host-main.cjs#L550666-L550673) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550666-550673](../../../../../../../reference/runtime/host-main.cjs#L550666-L550673) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:550666

Calls written directly in this body: `new Map`, `this.agents.get`, `this.agents.set`.

Assignment or increment targets: `held`.

SHA-256 of the source span: `f5c85612c85856cc006abbb7845f128857ee1eb531a918c62854b1f51d692e4e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
