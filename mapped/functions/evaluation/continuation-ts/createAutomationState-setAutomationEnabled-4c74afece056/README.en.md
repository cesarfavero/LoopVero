# `createAutomationState/setAutomationEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/continuation.ts` · [Module README](../../../../modules/evaluation/continuation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628716-628722](../../../../../reference/runtime/sand-eval-runner.cjs#L628716-L628722) | `FunctionExpression` | yes | `{ id, isEnabled }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628716-628722](../../../../../reference/runtime/sand-eval-runner.cjs#L628716-L628722) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:628716

Calls written directly in this body: `stateWriteFailed`, `stateWriteOk`, `store.setEnabled`.

SHA-256 of the source span: `eb95fbaff2c3ccc460b06282e408cf43b54f3ac10c6f288a8236b4131d3fd046`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
