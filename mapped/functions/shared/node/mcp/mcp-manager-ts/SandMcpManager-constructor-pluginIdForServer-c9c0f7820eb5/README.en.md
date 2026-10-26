# `SandMcpManager.constructor/pluginIdForServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689205-689207](../../../../../../../reference/runtime/host-main.cjs#L689205-L689207) | `ArrowFunctionExpression` | no | `serverName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689205-689207](../../../../../../../reference/runtime/host-main.cjs#L689205-L689207) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:689205 uses an implicit arrow-function return.

### host:689205

Calls written directly in this body: `.servers.find`, `this.lastAccountDisplayConfigView`.

SHA-256 of the source span: `7bc344a4ad683792ddcd5147aac6aaa7d847d9c369c2bd780c39ed9d3c5da085`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
