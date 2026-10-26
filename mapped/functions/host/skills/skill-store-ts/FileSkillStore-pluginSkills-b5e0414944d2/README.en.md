# `FileSkillStore.pluginSkills`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-store.ts` · [Module README](../../../../../modules/host/skills/skill-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721021-721031](../../../../../../reference/runtime/host-main.cjs#L721021-L721031) | `method` | no | `excludedIds = /* @__PURE__ */ new Set()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721021-721031](../../../../../../reference/runtime/host-main.cjs#L721021-L721031) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:721021

Calls written directly in this body: `excludedIds.has`, `skills.push`, `slugifySkillName`, `this.pluginSkillToSkill`, `this.readPluginSkillsIndex`.

SHA-256 of the source span: `2d7582596b87866afb17bf12494802bce5f99578ad9295cda392e5edea4eb314`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
