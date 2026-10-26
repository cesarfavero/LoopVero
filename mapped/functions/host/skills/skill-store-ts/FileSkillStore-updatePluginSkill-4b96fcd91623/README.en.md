# `FileSkillStore.updatePluginSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-store.ts` · [Module README](../../../../../modules/host/skills/skill-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721135-721155](../../../../../../reference/runtime/host-main.cjs#L721135-L721155) | `method` | no | `id, spec` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721135-721155](../../../../../../reference/runtime/host-main.cjs#L721135-L721155) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:721135

Calls written directly in this body: `parseSkillFile`, `readFileWithinSync`, `reportFallbackUnlessAbsent`, `resolveWithinSync`, `serializeSkillFile`, `this.get`, `this.pluginSkillRecord`, `this.pluginSkillsDirWatcher.writeFileAtomic`.

Assignment or increment targets: `existing`, `target`.

SHA-256 of the source span: `dd5746e3cb04027bf53fd5ae6d4e94c6f03a83ea53c2a2171a7333e7f27fb90e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
