# `FileSkillStore.managedSkillToSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-store.ts` · [Module README](../../../../../modules/host/skills/skill-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720950-720977](../../../../../../reference/runtime/host-main.cjs#L720950-L720977) | `method` | no | `skill, fetchedAt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720950-720977](../../../../../../reference/runtime/host-main.cjs#L720950-L720977) | 1 | 0 | 0 | 1 | 0 | 1 |

### host:720950

Calls written directly in this body: `.isFile`, `getManagedSkillFilePath`, `getManagedSkillsCachePath`, `reportFallbackUnlessAbsent`.

Assignment or increment targets: `hasSkillFile`.

SHA-256 of the source span: `71b543040d0a52a3569a499ccd3fc3c082ce70fb52f69726f40e684651f96d62`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
