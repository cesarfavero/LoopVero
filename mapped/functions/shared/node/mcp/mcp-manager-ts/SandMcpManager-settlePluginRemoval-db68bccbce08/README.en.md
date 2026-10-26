# `SandMcpManager.settlePluginRemoval`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689820-689836](../../../../../../../reference/runtime/host-main.cjs#L689820-L689836) | `method` | yes | `pluginId, { userInstalledOnly, removedStdio }, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689820-689836](../../../../../../../reference/runtime/host-main.cjs#L689820-L689836) | 2 | 0 | 1 | 1 | 2 | 0 |

### host:689820

Calls written directly in this body: `.then`, `Promise.all`, `Promise.allSettled`, `options2.syncRemoval`, `outcome.then`, `this.readInstallRecord`, `this.reloadAfterPluginWrite`.

Explicit throw targets: `removal.reason`, `synced.reason`.

SHA-256 of the source span: `43f625c387830ddee59d5f7d8fd9a40a816e794ed6a7000c02ae75431ab9f3b8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
