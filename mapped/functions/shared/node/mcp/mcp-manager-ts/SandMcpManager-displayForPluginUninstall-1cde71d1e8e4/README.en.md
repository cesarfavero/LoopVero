# `SandMcpManager.displayForPluginUninstall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689854-689868](../../../../../../../reference/runtime/host-main.cjs#L689854-L689868) | `method` | yes | `pluginId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689854-689868](../../../../../../../reference/runtime/host-main.cjs#L689854-L689868) | 4 | 0 | 2 | 4 | 0 | 1 |

### host:689854

Calls written directly in this body: `this.accountDisplayConfigProvider`, `this.accountGenerationAtPluginWrite.get`, `this.accountSlots.noteAccountDisplayConfig`, `this.activeScopeAccountDisplayConfigView`, `this.lastAccountDisplayConfigView`, `this.readAccountServersStartedAfter`.

SHA-256 of the source span: `29bb67c6b473bd82a1815726eddb6acf9d83719fe82ec301a61d26eba72594f3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
