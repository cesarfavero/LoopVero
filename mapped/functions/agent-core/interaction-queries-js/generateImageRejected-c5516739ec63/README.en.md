# `generateImageRejected`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475808-475823](../../../../../reference/runtime/host-main.cjs#L475808-L475823) | `FunctionExpression` | no | `queryId, reason` |
| [evaluation:255032-255047](../../../../../reference/runtime/sand-eval-runner.cjs#L255032-L255047) | `FunctionExpression` | no | `queryId, reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475808-475823](../../../../../reference/runtime/host-main.cjs#L475808-L475823) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255032-255047](../../../../../reference/runtime/sand-eval-runner.cjs#L255032-L255047) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475808

Calls written directly in this body: `new GenerateImageRequestResponse`, `new GenerateImageRequestResponse_Rejected`, `new InteractionResponse`.

SHA-256 of the source span: `0c725f41e9382cd9b313818449aadaa28defa9aff24c996b8bbae38fe5e08358`.

### evaluation:255032

Calls written directly in this body: `new GenerateImageRequestResponse`, `new GenerateImageRequestResponse_Rejected`, `new InteractionResponse`.

SHA-256 of the source span: `0c725f41e9382cd9b313818449aadaa28defa9aff24c996b8bbae38fe5e08358`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
