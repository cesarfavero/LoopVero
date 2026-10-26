# `FileSkillStore.get`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-store.ts` · [Module README](../../../../../modules/host/skills/skill-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721052-721066](../../../../../../reference/runtime/host-main.cjs#L721052-L721066) | `method` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721052-721066](../../../../../../reference/runtime/host-main.cjs#L721052-L721066) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:721052

Calls written directly in this body: `.find`, `.map`, `RESERVED_MANAGED_SKILL_IDS.has`, `automationToSkill`, `managedAll.find`, `managedAll.map`, `new Set`, `this.automations.get`, `this.library.get`, `this.library.list`, `this.managedSkills`, `this.pluginSkills`, `this.skillFromRecord`.

SHA-256 of the source span: `119620ff31b4c4e4264cb82473e32d5ebd90e5796ca85c00a51f0466d20903cc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
