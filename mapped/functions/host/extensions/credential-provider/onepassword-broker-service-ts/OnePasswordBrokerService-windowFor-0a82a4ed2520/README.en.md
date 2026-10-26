# `OnePasswordBrokerService.windowFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550764-550774](../../../../../../../reference/runtime/host-main.cjs#L550764-L550774) | `method` | yes | `agentId, explicit` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550764-550774](../../../../../../../reference/runtime/host-main.cjs#L550764-L550774) | 2 | 0 | 1 | 4 | 0 | 1 |

### host:550764

Calls written directly in this body: `errorLogTag`, `resolve31`, `this.options.log`.

SHA-256 of the source span: `583d4a16b3460e4dbfd0ab898a594f27e7b5111ef336620708db7cec8af438a5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
