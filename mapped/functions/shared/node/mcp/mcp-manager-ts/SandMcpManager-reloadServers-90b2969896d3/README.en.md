# `SandMcpManager.reloadServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689962-689968](../../../../../../../reference/runtime/host-main.cjs#L689962-L689968) | `method` | yes | `removedServerId, reconcileEmptyBox` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689962-689968](../../../../../../../reference/runtime/host-main.cjs#L689962-L689968) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:689962

Calls written directly in this body: `this.accountSlots.dropServerFromDisplay`, `this.listServers`, `this.reload`.

SHA-256 of the source span: `bbd9a1ce5a4bb93398e5f7b9ad6f6670a2faca7d8fef12c6a0b97a9256e70ada`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
