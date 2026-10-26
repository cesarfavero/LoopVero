# `FileSkillStore.createAutomation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-store.ts` · [Module README](../../../../../modules/host/skills/skill-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721085-721097](../../../../../../reference/runtime/host-main.cjs#L721085-L721097) | `method` | no | `spec, provenance` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721085-721097](../../../../../../reference/runtime/host-main.cjs#L721085-L721097) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:721085

Calls written directly in this body: `automationToSkill`, `cronTrigger`, `this.automations.upsert`.

SHA-256 of the source span: `648b218950704858b0eb411b4c86c66fdcd4a10518005978d805b1968e91a01e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
