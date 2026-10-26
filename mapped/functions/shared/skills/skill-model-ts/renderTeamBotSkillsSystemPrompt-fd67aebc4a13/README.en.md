# `renderTeamBotSkillsSystemPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `shared/skills/skill-model.ts` · [Module README](../../../../../modules/shared/skills/skill-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534321-534325](../../../../../../reference/runtime/sand-eval-runner.cjs#L534321-L534325) | `FunctionDeclaration` | no | `location, options2, copy` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534321-534325](../../../../../../reference/runtime/sand-eval-runner.cjs#L534321-L534325) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:534321

Calls written directly in this body: `.join`, `copy.storeServedFileLines`, `skillsCatalogPrefix`, `teamBotSkillFileAuthoringLines`, `teamBotSkillsLocationLine`.

SHA-256 of the source span: `499522d59dc22eb3f6ace6a5b76b7e5a4462ac9a8cbf17509d5110aa6193d958`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
