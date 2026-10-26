# `skillPools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/skill/skill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:565968-565977](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565968-L565977) | `FunctionDeclaration` | no | `listedSkills, loadableSkills` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565968-565977](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565968-L565977) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:565968

Calls written directly in this body: `.filter`, `distinctSkills`, `listed.map`, `modelInvocableSkills`, `new Set`.

SHA-256 of the source span: `455e3e889d7a6740340eddf4dbeab211a4e7fbc6a05dd0b1a5a5d4c7cca6d319`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
