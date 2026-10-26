# `HostBox.recordConnection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/host-box.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/host-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680484-680490](../../../../../../../reference/runtime/host-main.cjs#L680484-L680490) | `method` | no | `agentId, connection` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680484-680490](../../../../../../../reference/runtime/host-main.cjs#L680484-L680490) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:680484

Calls written directly in this body: `this.connectionEpochs.get`, `this.connectionEpochs.set`, `this.vncUrls.set`.

Assignment or increment targets: `this.imageUpdateAvailable`.

SHA-256 of the source span: `d798216179acfaffbc0e21e896c7f9b836c09b7ef68c78d2c062d76d8bf4283c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
