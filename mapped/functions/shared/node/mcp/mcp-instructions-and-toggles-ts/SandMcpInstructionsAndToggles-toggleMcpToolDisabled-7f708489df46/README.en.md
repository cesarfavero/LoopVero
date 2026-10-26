# `SandMcpInstructionsAndToggles.toggleMcpToolDisabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-instructions-and-toggles.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-instructions-and-toggles-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688518-688550](../../../../../../../reference/runtime/host-main.cjs#L688518-L688550) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688518-688550](../../../../../../../reference/runtime/host-main.cjs#L688518-L688550) | 6 | 0 | 2 | 1 | 2 | 0 |

### host:688518

Calls written directly in this body: `mcpToolPermissionScope`, `new SandMcpConfigError`, `nextRoutedToolDisableToggle`, `rowServerHost`, `settings.getMcpDisabledToolsByServerId`, `settings.getToolPermissions`, `settings.setMcpDisabledToolsByServerId`, `settings.setToolPermissions`, `this.deps.resolveListedDisplayServer`, `this.deps.settingsStore`, `this.listServerTools`, `validateMcpDisplayServerId`, `withMcpToolPermissionPolicy`.

Assignment or increment targets: `disabledByServerId[computed]`.

Explicit throw targets: `SandMcpConfigError`.

SHA-256 of the source span: `f6832b66603e6da9b9250dd0c35885bf3a7f407af288933f2f6f2fe62f0e4563`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
