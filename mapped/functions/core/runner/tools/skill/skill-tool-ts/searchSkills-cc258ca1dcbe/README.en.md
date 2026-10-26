# `searchSkills`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/skills/README.en.md).

**Module:** `core/runner/tools/skill/skill-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/skill/skill-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566013-566051](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L566013-L566051) | `FunctionDeclaration` | yes | `ctx, search, pools, request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566013-566051](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L566013-L566051) | 4 | 0 | 1 | 1 | 0 | 0 |

### evaluation:566013

Calls written directly in this body: `boundSkillSearch`, `createSkillsVirtualMount`, `hits.flatMap`, `hits.map`, `renderSkillSearch`, `results.map`, `search.agentId`, `search.onSearch`, `skillSearchLines`, `skillToolSearches.increment`, `virtualMount.search`.

SHA-256 of the source span: `eed89fcec3d0df0eaa369d2a70d496026b3b64be87b229826ca8610abf6965aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
