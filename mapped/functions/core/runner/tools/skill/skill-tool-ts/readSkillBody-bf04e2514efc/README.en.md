# `readSkillBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/skill/skill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:565895-565914](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565895-L565914) | `FunctionDeclaration` | yes | `ctx, deps, skill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565895-565914](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565895-L565914) | 3 | 0 | 1 | 1 | 2 | 0 |

### evaluation:565895

Calls written directly in this body: `.execute`, `deps.boxResources.get`, `new ReadArgs`, `new SandModelVisibleError`, `parseSkillFile`, `readFailureDetail`, `readOutputText`, `skillToolName`, `toModelVisibleText`.

Explicit throw targets: `SandModelVisibleError`.

SHA-256 of the source span: `de43348197619ce8d0a61c7a00964847e4f77f7ec1ead824cf336332c6a06b25`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
