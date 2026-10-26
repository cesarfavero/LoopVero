# `SandBrainDocsStore.writeSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629916-629957](../../../../../../reference/runtime/sand-eval-runner.cjs#L629916-L629957) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629916-629957](../../../../../../reference/runtime/sand-eval-runner.cjs#L629916-L629957) | 8 | 1 | 3 | 2 | 0 | 0 |

### evaluation:629916

Calls written directly in this body: `Date.now`, `clampSkillBody`, `clampSkillDescription`, `clampSkillName`, `existing.has`, `isSafeFolderId`, `new Set`, `slugifySkillName`, `stateWriteFailed`, `stateWriteOk`, `this.ensureLoaded`, `this.listSkills`, `this.requireFamily`, `this.skillRecord`, `this.skillsDir`, `this.subdirectories`, `this.writeSkillRecord`.

Assignment or increment targets: `id`, `suffix`, `written`.

SHA-256 of the source span: `23f5c2619de36ff08ed0835bb59cb589f2aa722c89e48e4691313bbf8fdd7d10`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
