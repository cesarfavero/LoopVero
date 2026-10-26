# `SandMcpManager.logoutAccount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689941-689943](../../../../../../../reference/runtime/host-main.cjs#L689941-L689943) | `method` | yes | `rawServerId, rawAccountKey` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689941-689943](../../../../../../../reference/runtime/host-main.cjs#L689941-L689943) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:689941

Calls written directly in this body: `this.accountSlots.logoutAccount`.

SHA-256 of the source span: `fedb96b4000df42f9d15e4553d8d258b07a46700334dac37c9d15e1b4bd6ab47`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
