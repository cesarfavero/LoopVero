# `LoopbackSandBox.hibernate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/loopback-sand-box.ts` · [Module README](../../../../../modules/host/box/loopback-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679419-679421](../../../../../../reference/runtime/host-main.cjs#L679419-L679421) | `method` | yes | `_ctx, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679419-679421](../../../../../../reference/runtime/host-main.cjs#L679419-L679421) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:679419

Calls written directly in this body: `clearAgentWindowConnections`.

SHA-256 of the source span: `16185206f4c999c282bb8fc03d9e2b1079a02c42a106e8431a3b299d8e78486e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
