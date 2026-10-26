# `webFetchRejected`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475617-475632](../../../../../reference/runtime/host-main.cjs#L475617-L475632) | `FunctionExpression` | no | `queryId, reason` |
| [evaluation:254841-254856](../../../../../reference/runtime/sand-eval-runner.cjs#L254841-L254856) | `FunctionExpression` | no | `queryId, reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475617-475632](../../../../../reference/runtime/host-main.cjs#L475617-L475632) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254841-254856](../../../../../reference/runtime/sand-eval-runner.cjs#L254841-L254856) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475617

Calls written directly in this body: `new InteractionResponse`, `new WebFetchRequestResponse`, `new WebFetchRequestResponse_Rejected`.

SHA-256 of the source span: `854ed427d6ab9700f30ffdd8885724b091eaa9f0e1a56d8ecb29e4c07417859a`.

### evaluation:254841

Calls written directly in this body: `new InteractionResponse`, `new WebFetchRequestResponse`, `new WebFetchRequestResponse_Rejected`.

SHA-256 of the source span: `854ed427d6ab9700f30ffdd8885724b091eaa9f0e1a56d8ecb29e4c07417859a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
