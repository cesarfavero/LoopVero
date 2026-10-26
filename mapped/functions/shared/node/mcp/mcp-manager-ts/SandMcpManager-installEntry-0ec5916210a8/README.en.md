# `SandMcpManager.installEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689673-689684](../../../../../../../reference/runtime/host-main.cjs#L689673-L689684) | `method` | yes | `request5, getAccessToken, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689673-689684](../../../../../../../reference/runtime/host-main.cjs#L689673-L689684) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:689673

Calls written directly in this body: `reportDeferredListingFailure`, `this.accountSlots.lastListedStateView`, `this.inPluginWriteOrder`, `this.reloadAfterPluginWrite`, `this.settingsStore.getActiveAccountScope`.

SHA-256 of the source span: `74f1836a68b23b2453a6986cfcaa3684a0d40c676b6a670071fffb260af6d071`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
