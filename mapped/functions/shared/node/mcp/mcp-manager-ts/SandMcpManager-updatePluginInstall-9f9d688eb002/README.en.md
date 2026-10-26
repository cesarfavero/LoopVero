# `SandMcpManager.updatePluginInstall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689685-689693](../../../../../../../reference/runtime/host-main.cjs#L689685-L689693) | `method` | yes | `request5, getAccessToken` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689685-689693](../../../../../../../reference/runtime/host-main.cjs#L689685-L689693) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:689685

Calls written directly in this body: `this.inPluginWriteOrder`, `this.reloadServers`, `this.settingsStore.getActiveAccountScope`.

SHA-256 of the source span: `c9817c733107627438dd7ea374054a52de55c2c6ca148df3b6c03ed2c3673dc7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
