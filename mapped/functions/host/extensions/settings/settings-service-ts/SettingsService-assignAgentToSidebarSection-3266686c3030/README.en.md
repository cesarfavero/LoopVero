# `SettingsService.assignAgentToSidebarSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/settings/settings-service.ts` · [Module README](../../../../../../modules/host/extensions/settings/settings-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728762-728768](../../../../../../../reference/runtime/host-main.cjs#L728762-L728768) | `method` | no | `agentId, sectionId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728762-728768](../../../../../../../reference/runtime/host-main.cjs#L728762-L728768) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:728762

Calls written directly in this body: `SidebarSections.assignAgents`, `this.announceChange`, `this.listSidebarSections`, `this.store.setSidebarSections`.

SHA-256 of the source span: `ea00471f20ab090c18fd7209b37d314f5c3c8aed6d7205401bda8a4a70b7e0de`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
