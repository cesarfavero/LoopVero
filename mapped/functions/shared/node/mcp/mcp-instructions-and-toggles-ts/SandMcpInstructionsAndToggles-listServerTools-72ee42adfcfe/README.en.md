# `SandMcpInstructionsAndToggles.listServerTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-instructions-and-toggles.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-instructions-and-toggles-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688470-688517](../../../../../../../reference/runtime/host-main.cjs#L688470-L688517) | `method` | yes | `rawServerId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688470-688517](../../../../../../../reference/runtime/host-main.cjs#L688470-L688517) | 6 | 1 | 2 | 1 | 1 | 0 |

### host:688470

Calls written directly in this body: `byName3.has`, `byName3.set`, `byName3.values`, `disabled.includes`, `effectiveMcpToolPermission`, `isDeclaredReadOnlyMcpTool`, `isReadForToolPermissions`, `mcpToolGroupPermissionOf`, `mcpToolPermissionScope`, `new Map`, `new SandMcpConfigError`, `routedToolCarriedPermission`, `rowServerHost`, `settings.getMcpDisabledToolsByServerId`, `settings.getToolPermissions`, `this.deps.getToolsRaw`, `this.deps.resolveListedDisplayServer`, `this.deps.settingsStore`, `this.displayRowForIdentifier`, `validateMcpDisplayServerId`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `04c066e4f33b88a4bd9f328ce1e219527554f5a5b26534a08647253d958f7d83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
