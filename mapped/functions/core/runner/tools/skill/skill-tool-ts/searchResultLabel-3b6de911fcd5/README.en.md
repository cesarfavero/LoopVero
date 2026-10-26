# `searchResultLabel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/skill/skill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:565985-565989](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565985-L565989) | `FunctionDeclaration` | no | `skill, pools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565985-565989](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565985-L565989) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:565985

Calls written directly in this body: `resolveSkill`, `skillToolName`, `toModelVisibleText`.

SHA-256 of the source span: `f5c13b792a764f220bbd78e21a8f9eb8bce04a51a1cb3f4bfaa53d5c50a54f71`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
