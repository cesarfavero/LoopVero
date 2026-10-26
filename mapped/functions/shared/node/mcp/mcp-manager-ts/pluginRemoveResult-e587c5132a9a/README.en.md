# `pluginRemoveResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689053-689065](../../../../../../../reference/runtime/host-main.cjs#L689053-L689065) | `FunctionDeclaration` | no | `pluginId, state, installRecord` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689053-689065](../../../../../../../reference/runtime/host-main.cjs#L689053-L689065) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:689053

Calls written directly in this body: `remainingRows.some`, `state.servers.filter`.

SHA-256 of the source span: `abb4862c113edc25bf6b2a7527229be185bacd6aa5fa341fcbd1fd7303dc856d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
