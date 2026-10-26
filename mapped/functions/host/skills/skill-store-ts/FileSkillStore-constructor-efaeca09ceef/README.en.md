# `FileSkillStore.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-store.ts` · [Module README](../../../../../modules/host/skills/skill-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720887-720912](../../../../../../reference/runtime/host-main.cjs#L720887-L720912) | `method` | no | `agentDir, globalDir, resolveUserTimeZone = () => void 0` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720887-720912](../../../../../../reference/runtime/host-main.cjs#L720887-L720912) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:720887

Calls written directly in this body: `createDebouncePolicy`, `getAgentAutomationsDir`, `getManagedSkillsDir`, `getPluginSkillsDir`, `getPluginsRootDir`, `new FileAutomationStore`, `new GlobalSkillLibrary`, `new WatchedDirectory`, `this.migrateLegacyPerAgentSkills`.

Assignment or increment targets: `this.agentDir`, `this.automations`, `this.library`, `this.managedDir`, `this.managedDirWatcher`, `this.pluginSkillsDir`, `this.pluginSkillsDirWatcher`, `this.pluginsRoot`.

SHA-256 of the source span: `a568fcca7c305da30426d2909a3064b504a8978d9ff3c6678389ff4491432fcf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
