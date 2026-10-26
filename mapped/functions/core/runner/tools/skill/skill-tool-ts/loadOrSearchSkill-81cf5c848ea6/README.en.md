# `loadOrSearchSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/skill/skill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566055-566080](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L566055-L566080) | `FunctionDeclaration` | yes | `ctx, deps, search, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566055-566080](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L566055-L566080) | 5 | 0 | 3 | 3 | 2 | 0 |

### evaluation:566055

Calls written directly in this body: `ambiguousSkillMessage`, `countLoad`, `deps.skills`, `loadResolvedSkill`, `new SandModelVisibleError`, `presentText`, `resolveSkill`, `search.loadableSkills`, `searchSkills`, `skillPools`.

Explicit throw targets: `SandModelVisibleError`.

SHA-256 of the source span: `2a2d1210451397166007c0982201e26eb9be0f083642d70ac5bb4dd5c52e58c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
