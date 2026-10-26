# `webSearchApproved`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475572-475585](../../../../../reference/runtime/host-main.cjs#L475572-L475585) | `FunctionExpression` | no | `queryId` |
| [evaluation:254796-254809](../../../../../reference/runtime/sand-eval-runner.cjs#L254796-L254809) | `FunctionExpression` | no | `queryId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475572-475585](../../../../../reference/runtime/host-main.cjs#L475572-L475585) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254796-254809](../../../../../reference/runtime/sand-eval-runner.cjs#L254796-L254809) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475572

Calls written directly in this body: `new InteractionResponse`, `new WebSearchRequestResponse`, `new WebSearchRequestResponse_Approved`.

SHA-256 of the source span: `791fd2baf246b56b5018784c8d358187cc79345b81688494f7bc5ac3d4966fcf`.

### evaluation:254796

Calls written directly in this body: `new InteractionResponse`, `new WebSearchRequestResponse`, `new WebSearchRequestResponse_Approved`.

SHA-256 of the source span: `791fd2baf246b56b5018784c8d358187cc79345b81688494f7bc5ac3d4966fcf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
