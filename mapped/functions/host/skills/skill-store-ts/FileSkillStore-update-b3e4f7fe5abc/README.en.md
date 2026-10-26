# `FileSkillStore.update`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-store.ts` · [Module README](../../../../../modules/host/skills/skill-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721098-721134](../../../../../../reference/runtime/host-main.cjs#L721098-L721134) | `method` | no | `id, spec, provenance` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721098-721134](../../../../../../reference/runtime/host-main.cjs#L721098-L721134) | 9 | 0 | 0 | 7 | 0 | 0 |

### host:721098

Calls written directly in this body: `automationToSkill`, `clampSkillBody`, `clampSkillName`, `cronTrigger`, `schedule.trim`, `this.automations.get`, `this.automations.update`, `this.get`, `this.library.update`, `this.skillFromRecord`, `this.updatePluginSkill`.

SHA-256 of the source span: `594174508e7022385a44be8fbb7d0b60ad400a3eda95f0d2c724e0a4d1d5d2dd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
