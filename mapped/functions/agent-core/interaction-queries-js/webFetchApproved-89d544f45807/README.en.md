# `webFetchApproved`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475603-475616](../../../../../reference/runtime/host-main.cjs#L475603-L475616) | `FunctionExpression` | no | `queryId` |
| [evaluation:254827-254840](../../../../../reference/runtime/sand-eval-runner.cjs#L254827-L254840) | `FunctionExpression` | no | `queryId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475603-475616](../../../../../reference/runtime/host-main.cjs#L475603-L475616) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254827-254840](../../../../../reference/runtime/sand-eval-runner.cjs#L254827-L254840) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475603

Calls written directly in this body: `new InteractionResponse`, `new WebFetchRequestResponse`, `new WebFetchRequestResponse_Approved`.

SHA-256 of the source span: `cf28e1e1ba8d22f90e62bb3ed150da9ff67caa89afaac0acf0f46f3f91c8656d`.

### evaluation:254827

Calls written directly in this body: `new InteractionResponse`, `new WebFetchRequestResponse`, `new WebFetchRequestResponse_Approved`.

SHA-256 of the source span: `cf28e1e1ba8d22f90e62bb3ed150da9ff67caa89afaac0acf0f46f3f91c8656d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
