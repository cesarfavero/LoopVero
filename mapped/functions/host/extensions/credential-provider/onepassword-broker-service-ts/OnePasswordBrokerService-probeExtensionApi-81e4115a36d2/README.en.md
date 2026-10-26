# `OnePasswordBrokerService.probeExtensionApi`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550823-550826](../../../../../../../reference/runtime/host-main.cjs#L550823-L550826) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550823-550826](../../../../../../../reference/runtime/host-main.cjs#L550823-L550826) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:550823

Calls written directly in this body: `this.options.bridge.probeApiState`, `this.pickCdpPort`.

SHA-256 of the source span: `709525c1c541f79fa72c44dd6f55b8e2d744b7df091c9da1ac5e0c6809de5f6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
