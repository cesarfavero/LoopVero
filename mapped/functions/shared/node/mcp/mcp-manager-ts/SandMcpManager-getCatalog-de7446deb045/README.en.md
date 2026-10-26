# `SandMcpManager.getCatalog`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689664-689666](../../../../../../../reference/runtime/host-main.cjs#L689664-L689666) | `method` | yes | `getAccessToken, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689664-689666](../../../../../../../reference/runtime/host-main.cjs#L689664-L689666) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:689664

Calls written directly in this body: `this.catalogFlow.getCatalog`.

SHA-256 of the source span: `22570dc5415e77bd9ab74892cc13d4b46887538454b95d7ed72682925e31760d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
