# `fetchSkillCatalog`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/managed-setup/cursor-skills-marketplace.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/cursor-skills-marketplace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683364-683402](../../../../../../../reference/runtime/host-main.cjs#L683364-L683402) | `FunctionDeclaration` | yes | `backend, getAccessToken, getTeamId, getMachineId, report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683364-683402](../../../../../../../reference/runtime/host-main.cjs#L683364-L683402) | 4 | 2 | 1 | 1 | 0 | 1 |

### host:683364

Calls written directly in this body: `client.listMarketplacePlugins`, `createDashboardClient`, `entries.push`, `entries.sort`, `errorLogTag`, `new Set`, `plugin.id.toString`, `rememberPluginLogoUrl`, `report`, `seen.add`, `seen.has`, `skill.name.toLowerCase`.

SHA-256 of the source span: `55e8e14706d3820618629c1183c0935ca3aed952eb75adb7fc478e5bf6325fe6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
