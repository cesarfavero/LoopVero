# `connectScmApproved`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475745-475758](../../../../../reference/runtime/host-main.cjs#L475745-L475758) | `FunctionExpression` | no | `queryId` |
| [evaluation:254969-254982](../../../../../reference/runtime/sand-eval-runner.cjs#L254969-L254982) | `FunctionExpression` | no | `queryId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475745-475758](../../../../../reference/runtime/host-main.cjs#L475745-L475758) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254969-254982](../../../../../reference/runtime/sand-eval-runner.cjs#L254969-L254982) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475745

Calls written directly in this body: `new ConnectScmRequestResponse`, `new ConnectScmRequestResponse_Approved`, `new InteractionResponse`.

SHA-256 of the source span: `13a0b973999a2e59896924e0af055a165ec45037d805c43f725490c7b0c537fc`.

### evaluation:254969

Calls written directly in this body: `new ConnectScmRequestResponse`, `new ConnectScmRequestResponse_Approved`, `new InteractionResponse`.

SHA-256 of the source span: `13a0b973999a2e59896924e0af055a165ec45037d805c43f725490c7b0c537fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
