# `isGoalStateShapeValid`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/goal-continuation.js` · [Module README](../../../../modules/agent-core/goal-continuation-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475474-475476](../../../../../reference/runtime/host-main.cjs#L475474-L475476) | `FunctionDeclaration` | no | `goalState, identity` |
| [evaluation:254694-254696](../../../../../reference/runtime/sand-eval-runner.cjs#L254694-L254696) | `FunctionDeclaration` | no | `goalState, identity2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475474-475476](../../../../../reference/runtime/host-main.cjs#L475474-L475476) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254694-254696](../../../../../reference/runtime/sand-eval-runner.cjs#L254694-L254696) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475474

Calls written directly in this body: `GOAL_ID_PATTERN.test`, `isGoalIdentityValid`.

SHA-256 of the source span: `b23633e3b18e580cfb23b3779f059a4a93ab3e0e09afe54e3fecf38d231ea489`.

### evaluation:254694

Calls written directly in this body: `GOAL_ID_PATTERN.test`, `isGoalIdentityValid`.

SHA-256 of the source span: `aae57a3d245940090d6d5141852e0d6227c4f4fd115195d0c84d879e9d6a46ce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
