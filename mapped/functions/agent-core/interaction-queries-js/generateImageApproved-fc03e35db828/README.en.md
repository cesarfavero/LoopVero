# `generateImageApproved`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475792-475807](../../../../../reference/runtime/host-main.cjs#L475792-L475807) | `FunctionExpression` | no | `queryId, description9` |
| [evaluation:255016-255031](../../../../../reference/runtime/sand-eval-runner.cjs#L255016-L255031) | `FunctionExpression` | no | `queryId, description9` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475792-475807](../../../../../reference/runtime/host-main.cjs#L475792-L475807) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255016-255031](../../../../../reference/runtime/sand-eval-runner.cjs#L255016-L255031) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475792

Calls written directly in this body: `new GenerateImageRequestResponse`, `new GenerateImageRequestResponse_Approved`, `new InteractionResponse`.

SHA-256 of the source span: `87612bc6ccdae722316387970caa901a9a094e092731e1907adaf265472d59b7`.

### evaluation:255016

Calls written directly in this body: `new GenerateImageRequestResponse`, `new GenerateImageRequestResponse_Approved`, `new InteractionResponse`.

SHA-256 of the source span: `87612bc6ccdae722316387970caa901a9a094e092731e1907adaf265472d59b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
