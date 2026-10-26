# `FileSkillStore.listAllFrom`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-store.ts` · [Module README](../../../../../modules/host/skills/skill-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721039-721048](../../../../../../reference/runtime/host-main.cjs#L721039-L721048) | `method` | no | `{ definitionsOnly }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721039-721048](../../../../../../reference/runtime/host-main.cjs#L721039-L721048) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:721039

Calls written directly in this body: `.filter`, `.map`, `managed.map`, `new Set`, `records2.map`, `this.automations.list`, `this.automations.listDefinitions`, `this.library.list`, `this.managedSkills`, `this.pluginSkills`.

SHA-256 of the source span: `37ab83abdcafd13882fb8dc21c00c3989e1736b7fb8b74dc45524ed0d0768f8e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
