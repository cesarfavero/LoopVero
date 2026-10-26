# `normalizeManagedSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `core/skills/managed-skill-normalize.ts` · [Module README](../../../../../modules/core/skills/managed-skill-normalize-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683941-683960](../../../../../../reference/runtime/host-main.cjs#L683941-L683960) | `FunctionDeclaration` | no | `{   skill }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683941-683960](../../../../../../reference/runtime/host-main.cjs#L683941-L683960) | 6 | 0 | 0 | 5 | 0 | 0 |

### host:683941

Calls written directly in this body: `body.trim`, `clampSkillBody`, `clampSkillDescription`, `clampSkillName`, `isSafeFolderId`, `parseSkillFile`, `skill.id.trim`.

SHA-256 of the source span: `3556825f096bd58a6a2ce847a8d52f7d519d9d65b877df5e973cac1b35305a50`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
