# `loadResolvedSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/skill/skill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:565939-565951](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565939-L565951) | `FunctionDeclaration` | yes | `ctx, deps, skill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565939-565951](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565939-L565951) | 0 | 0 | 2 | 1 | 0 | 0 |

### evaluation:565939

Calls written directly in this body: `.catch`, `countLoad`, `readSkillBody`, `recordSkillActivation`, `renderSkillContent`, `skillContentEnding`, `skillToolName`.

SHA-256 of the source span: `2a76b53b51a947f0185cbc921eeca8bd11e39098112af9dcbe8d48b41ef7e1df`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
