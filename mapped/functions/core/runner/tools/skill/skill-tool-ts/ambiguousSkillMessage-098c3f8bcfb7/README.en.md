# `ambiguousSkillMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/skill/skill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:565869-565872](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565869-L565872) | `FunctionDeclaration` | no | `requested, candidates` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565869-565872](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565869-L565872) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:565869

Calls written directly in this body: `.join`, `candidates.map`.

SHA-256 of the source span: `69c635e2834693da91fa44fbd8bda0eceff8d4d2a98036350092d6173b61a398`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
