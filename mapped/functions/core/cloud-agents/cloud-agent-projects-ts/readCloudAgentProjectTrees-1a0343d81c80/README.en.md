# `readCloudAgentProjectTrees`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-projects.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-projects-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566556-566566](../../../../../../reference/runtime/sand-eval-runner.cjs#L566556-L566566) | `FunctionDeclaration` | yes | `api, rows` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566556-566566](../../../../../../reference/runtime/sand-eval-runner.cjs#L566556-L566566) | 3 | 0 | 1 | 5 | 0 | 1 |

### evaluation:566556

Calls written directly in this body: `.map`, `api.listProjectTrees`, `classifyReadFailure2`, `isProjectTreeReadTurnedOff`, `new Map`, `rows.filter`.

SHA-256 of the source span: `aef0eb48d55d3d51774e6f1fcb571fe1e74039a9f2f5bd0285a9f654f6911648`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
