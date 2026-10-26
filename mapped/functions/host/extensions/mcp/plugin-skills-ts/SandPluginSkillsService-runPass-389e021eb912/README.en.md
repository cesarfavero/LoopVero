# `SandPluginSkillsService.runPass`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/plugin-skills.ts` · [Module README](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702017-702057](../../../../../../../reference/runtime/host-main.cjs#L702017-L702057) | `method` | yes | `trigger2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702017-702057](../../../../../../../reference/runtime/host-main.cjs#L702017-L702057) | 2 | 0 | 1 | 2 | 1 | 1 |

### host:702017

Calls written directly in this body: `Date.now`, `errorLogTag`, `getPluginDataRootDir`, `getPluginSkillsDir`, `getPluginsRootDir`, `nextIndexEntries`, `pruneUninstalledPluginDataDirs`, `pruneUninstalledPluginDirs`, `records2.map`, `skillRecordsIdentity`, `this.current`, `this.currentIndex`, `this.options.load`, `this.options.log`, `this.options.reportSync`, `writePluginSkillsCache`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `466348aca5b4f3559f0ed86f8ea6e6606be75d383be3a0dd97c17b5358b03b92`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
