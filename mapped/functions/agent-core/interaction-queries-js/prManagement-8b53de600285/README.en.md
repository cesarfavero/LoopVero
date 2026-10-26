# `prManagement`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475704-475712](../../../../../reference/runtime/host-main.cjs#L475704-L475712) | `FunctionExpression` | no | `queryId, result` |
| [evaluation:254928-254936](../../../../../reference/runtime/sand-eval-runner.cjs#L254928-L254936) | `FunctionExpression` | no | `queryId, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475704-475712](../../../../../reference/runtime/host-main.cjs#L475704-L475712) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254928-254936](../../../../../reference/runtime/sand-eval-runner.cjs#L254928-L254936) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475704

Calls written directly in this body: `new InteractionResponse`.

SHA-256 of the source span: `6b1928ac4ae7d64b345dea4bb8d05590f8ee8d59985281d8e0b3b29e68ce81b8`.

### evaluation:254928

Calls written directly in this body: `new InteractionResponse`.

SHA-256 of the source span: `6b1928ac4ae7d64b345dea4bb8d05590f8ee8d59985281d8e0b3b29e68ce81b8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
