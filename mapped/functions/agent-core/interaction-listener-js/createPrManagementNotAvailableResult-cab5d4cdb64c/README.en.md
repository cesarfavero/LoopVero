# `createPrManagementNotAvailableResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-listener.js` · [Module README](../../../../modules/agent-core/interaction-listener-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:255051-255060](../../../../../reference/runtime/sand-eval-runner.cjs#L255051-L255060) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:255051-255060](../../../../../reference/runtime/sand-eval-runner.cjs#L255051-L255060) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:255051

Calls written directly in this body: `new PrManagementError`, `new PrManagementResult`.

SHA-256 of the source span: `d69a3ed727955dd18bc16fc124651523cba9e3a25f6a9c93c466d9b8df64d444`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
