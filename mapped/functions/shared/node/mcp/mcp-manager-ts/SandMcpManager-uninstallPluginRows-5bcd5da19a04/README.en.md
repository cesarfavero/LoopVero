# `SandMcpManager.uninstallPluginRows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689933-689940](../../../../../../../reference/runtime/host-main.cjs#L689933-L689940) | `method` | yes | `pluginId, serverId, accountScope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689933-689940](../../../../../../../reference/runtime/host-main.cjs#L689933-L689940) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:689933

Calls written directly in this body: `this.classifyRemoveOutcome`, `this.inPluginWriteOrder`, `this.reloadServers`.

SHA-256 of the source span: `11581d4e5d76b499ead5e4cdba052b139fd0dbddd2dd9dd0738b2d8ac4d23147`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
