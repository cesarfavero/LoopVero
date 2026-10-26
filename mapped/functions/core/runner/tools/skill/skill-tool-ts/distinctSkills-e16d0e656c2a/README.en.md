# `distinctSkills`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/skill/skill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:565791-565798](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565791-L565798) | `FunctionDeclaration` | no | `skills` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565791-565798](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565791-L565798) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:565791

Calls written directly in this body: `new Set`, `skills.filter`.

SHA-256 of the source span: `2f1f5202aa03aa5db3f7de4ac40359f0c52d64894c10ea6901bc088429619229`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
