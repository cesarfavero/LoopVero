# `FileSkillStore.pluginSkillToSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-store.ts` · [Module README](../../../../../modules/host/skills/skill-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720995-721020](../../../../../../reference/runtime/host-main.cjs#L720995-L721020) | `method` | no | `record3, index` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720995-721020](../../../../../../reference/runtime/host-main.cjs#L720995-L721020) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:720995

Calls written directly in this body: `pluginSkillParseCache.read`.

SHA-256 of the source span: `7b0ecf92b7bbdfd629cc4779d1c8b3d6cddb8ccc2dc936fc54be3fa115488244`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
