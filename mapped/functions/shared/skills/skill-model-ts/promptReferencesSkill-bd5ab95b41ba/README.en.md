# `promptReferencesSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `shared/skills/skill-model.ts` · [Module README](../../../../../modules/shared/skills/skill-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683228-683230](../../../../../../reference/runtime/host-main.cjs#L683228-L683230) | `FunctionDeclaration` | no | `prompt, skill` |
| [evaluation:534264-534266](../../../../../../reference/runtime/sand-eval-runner.cjs#L534264-L534266) | `FunctionDeclaration` | no | `prompt, skill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683228-683230](../../../../../../reference/runtime/host-main.cjs#L683228-L683230) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534264-534266](../../../../../../reference/runtime/sand-eval-runner.cjs#L534264-L534266) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:683228

Calls written directly in this body: `collectMentionedSkills`.

SHA-256 of the source span: `826b2e226d2033d3161f7e26c04abf43b09acdd24b1bc50aa6ab627962225c80`.

### evaluation:534264

Calls written directly in this body: `collectMentionedSkills`.

SHA-256 of the source span: `826b2e226d2033d3161f7e26c04abf43b09acdd24b1bc50aa6ab627962225c80`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
