# `parseSkillFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `shared/skills/skill-model.ts` · [Module README](../../../../../modules/shared/skills/skill-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683027-683048](../../../../../../reference/runtime/host-main.cjs#L683027-L683048) | `FunctionDeclaration` | no | `raw` |
| [evaluation:534139-534160](../../../../../../reference/runtime/sand-eval-runner.cjs#L534139-L534160) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683027-683048](../../../../../../reference/runtime/host-main.cjs#L683027-L683048) | 4 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:534139-534160](../../../../../../reference/runtime/sand-eval-runner.cjs#L534139-L534160) | 4 | 0 | 0 | 2 | 0 | 1 |

### host:683027

Calls written directly in this body: `Object.keys`, `clampSkillBody`, `clampSkillDescription`, `clampSkillName`, `grayMatter`, `isSkillFrontmatter`, `readSourceRef`, `readTrigger`.

Assignment or increment targets: `content`, `data2`.

SHA-256 of the source span: `eb94bad40331e8ac5d6f25d65f81380f7dbf772689a079c8e171ce16c2be89ab`.

### evaluation:534139

Calls written directly in this body: `Object.keys`, `clampSkillBody`, `clampSkillDescription`, `clampSkillName`, `grayMatter`, `isSkillFrontmatter`, `readSourceRef`, `readTrigger`.

Assignment or increment targets: `content`, `data2`.

SHA-256 of the source span: `1b4c831d0d630b3070725421fb0588f4995d045c64faa9677c8868945d711e65`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
