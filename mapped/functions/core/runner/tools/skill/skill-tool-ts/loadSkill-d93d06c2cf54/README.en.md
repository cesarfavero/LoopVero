# `loadSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/skill/skill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:565952-565967](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565952-L565967) | `FunctionDeclaration` | yes | `ctx, deps, requested` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565952-565967](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565952-L565967) | 3 | 0 | 1 | 1 | 2 | 0 |

### evaluation:565952

Calls written directly in this body: `ambiguousSkillMessage`, `countLoad`, `deps.skills`, `loadResolvedSkill`, `missingSkillMessage`, `modelInvocableSkills`, `new SandModelVisibleError`, `requested.trim`, `resolveSkill`.

Explicit throw targets: `SandModelVisibleError`.

SHA-256 of the source span: `8698394feab36c5365dd4f11a644767c8ccfa61076d5b017f9a2a9fccc89a3ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
