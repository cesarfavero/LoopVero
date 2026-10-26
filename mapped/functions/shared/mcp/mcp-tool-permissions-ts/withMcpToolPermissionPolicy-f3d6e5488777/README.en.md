# `withMcpToolPermissionPolicy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-tool-permissions.ts` · [Module README](../../../../../modules/shared/mcp/mcp-tool-permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686967-686972](../../../../../../reference/runtime/host-main.cjs#L686967-L686972) | `FunctionDeclaration` | no | `permissions, serverId, policy` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686967-686972](../../../../../../reference/runtime/host-main.cjs#L686967-L686972) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:686967

Calls written directly in this body: `isEmptyToolPermissionPolicy`, `mcpToolPermissionScope`.

SHA-256 of the source span: `9b24cd838aef0c32a851ae1889c03e7bdb035953506204e9a73786ecc54c3819`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
