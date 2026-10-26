# `resolveSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/skill/skill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:565799-565816](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565799-L565816) | `FunctionDeclaration` | no | `listed, requested, { unlisted = [] } = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565799-565816](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565799-L565816) | 3 | 2 | 0 | 3 | 0 | 0 |

### evaluation:565799

Calls written directly in this body: `distinctSkills`, `looseKey2`, `pool.filter`, `query2.includes`, `requested.trim`.

SHA-256 of the source span: `773326965c01470abe5b7c7268887020defb5fdd34129005d09b945e60b9b4bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
