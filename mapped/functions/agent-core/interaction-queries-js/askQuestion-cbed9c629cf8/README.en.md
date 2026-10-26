# `askQuestion`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475634-475642](../../../../../reference/runtime/host-main.cjs#L475634-L475642) | `FunctionExpression` | no | `queryId, result` |
| [evaluation:254858-254866](../../../../../reference/runtime/sand-eval-runner.cjs#L254858-L254866) | `FunctionExpression` | no | `queryId, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475634-475642](../../../../../reference/runtime/host-main.cjs#L475634-L475642) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254858-254866](../../../../../reference/runtime/sand-eval-runner.cjs#L254858-L254866) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475634

Calls written directly in this body: `new AskQuestionInteractionResponse`, `new InteractionResponse`.

SHA-256 of the source span: `ade48ef34afc717a793e34d4e36184149073c7b33eb40193affd13840c659581`.

### evaluation:254858

Calls written directly in this body: `new AskQuestionInteractionResponse`, `new InteractionResponse`.

SHA-256 of the source span: `ade48ef34afc717a793e34d4e36184149073c7b33eb40193affd13840c659581`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
