# `SandMcpManager.addServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689658-689663](../../../../../../../reference/runtime/host-main.cjs#L689658-L689663) | `method` | yes | `request5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689658-689663](../../../../../../../reference/runtime/host-main.cjs#L689658-L689663) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:689658

Calls written directly in this body: `parseServerConfig`, `this.addServersToAccount`, `this.reloadServers`, `this.validateInstallableName`.

SHA-256 of the source span: `26111cd5ff16df84acd3678075c4fa4ab7c42ff2597552df19e198d21386711e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
