# `OnePasswordBrokerService.pickOrStartCdpPort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550784-550822](../../../../../../../reference/runtime/host-main.cjs#L550784-L550822) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550784-550822](../../../../../../../reference/runtime/host-main.cjs#L550784-L550822) | 2 | 0 | 2 | 3 | 1 | 1 |

### host:550784

Calls written directly in this body: `this.browserStart.run`, `this.options.log`, `this.pickCdpPort`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `1dc462fa192eea527c7a93f530d4621d7706c84d0238fe1aa5d0e743d5b5db5d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
