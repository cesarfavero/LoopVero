# `serializeSkillFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `shared/skills/skill-model.ts` · [Module README](../../../../../modules/shared/skills/skill-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683049-683084](../../../../../../reference/runtime/host-main.cjs#L683049-L683084) | `FunctionDeclaration` | no | `spec, existingData` |
| [evaluation:534161-534196](../../../../../../reference/runtime/sand-eval-runner.cjs#L534161-L534196) | `FunctionDeclaration` | no | `spec, existingData` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683049-683084](../../../../../../reference/runtime/host-main.cjs#L683049-L683084) | 6 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534161-534196](../../../../../../reference/runtime/sand-eval-runner.cjs#L534161-L534196) | 6 | 0 | 0 | 1 | 0 | 0 |

### host:683049

Calls written directly in this body: `Object.keys`, `grayMatterStringify`, `isSkillFrontmatter`, `spec.body.trim`.

Assignment or increment targets: `data2.description`, `data2.name`, `data2.trigger`, `data2[computed]`, `metadata2[computed]`.

SHA-256 of the source span: `b0b1136d88f21b4d8fcc6be2603808b4d3ceb1890862309de9cd7994b188b75d`.

### evaluation:534161

Calls written directly in this body: `Object.keys`, `grayMatterStringify`, `isSkillFrontmatter`, `spec.body.trim`.

Assignment or increment targets: `data2.description`, `data2.name`, `data2.trigger`, `data2[computed]`, `metadata2[computed]`.

SHA-256 of the source span: `b0b1136d88f21b4d8fcc6be2603808b4d3ceb1890862309de9cd7994b188b75d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
