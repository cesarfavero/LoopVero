# `LoopbackSandBox.windowOwnedBy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/loopback-sand-box.ts` · [Module README](../../../../../modules/host/box/loopback-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679398-679408](../../../../../../reference/runtime/host-main.cjs#L679398-L679408) | `method` | yes | `ctx, agentId, windowIndex, ownerToken` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679398-679408](../../../../../../reference/runtime/host-main.cjs#L679398-L679408) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:679398

Calls written directly in this body: `sandBoxWindowKey`, `this.ensureReady`, `this.runWindowOwnerCheck`, `this.windowConnections.delete`.

SHA-256 of the source span: `d5f1b3032e6816c7a2bb83c07d9e88e38fa0e907e7ca99a1cf7bbdbfa582c015`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
