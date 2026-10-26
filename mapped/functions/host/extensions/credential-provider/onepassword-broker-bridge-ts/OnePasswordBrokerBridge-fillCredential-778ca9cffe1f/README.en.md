# `OnePasswordBrokerBridge.fillCredential`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-bridge.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550174-550188](../../../../../../../reference/runtime/host-main.cjs#L550174-L550188) | `method` | no | `cdpPort, session, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550174-550188](../../../../../../../reference/runtime/host-main.cjs#L550174-L550188) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:550174

Calls written directly in this body: `this.call`.

SHA-256 of the source span: `78c656044863e6460a42b7bffc94ce0c58e8c7588ed2351282b9e5fd683ddf19`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
