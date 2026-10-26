# `goalElapsedMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/goal-continuation.js` · [Module README](../../../../modules/agent-core/goal-continuation-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475457-475460](../../../../../reference/runtime/host-main.cjs#L475457-L475460) | `FunctionDeclaration` | no | `goalState, nowMs2` |
| [evaluation:254677-254680](../../../../../reference/runtime/sand-eval-runner.cjs#L254677-L254680) | `FunctionDeclaration` | no | `goalState, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475457-475460](../../../../../reference/runtime/host-main.cjs#L475457-L475460) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254677-254680](../../../../../reference/runtime/sand-eval-runner.cjs#L254677-L254680) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:475457

Calls written directly in this body: `Number`, `goalElapsedMsFrom`, `goalWorkedMs`.

SHA-256 of the source span: `3d4d37fb4a96f0db1fb676f17bac5587773b5cc29a00f9bdbceb4e65a86a4cc3`.

### evaluation:254677

Calls written directly in this body: `Number`, `goalElapsedMsFrom`, `goalWorkedMs`.

SHA-256 of the source span: `07fe2074b119aac34d3e4452f485d56b6bba07e6005715ab6453011d5bfe0bfc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
