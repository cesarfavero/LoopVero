# `replaceEnv`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475694-475702](../../../../../reference/runtime/host-main.cjs#L475694-L475702) | `FunctionExpression` | no | `queryId, result` |
| [evaluation:254918-254926](../../../../../reference/runtime/sand-eval-runner.cjs#L254918-L254926) | `FunctionExpression` | no | `queryId, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475694-475702](../../../../../reference/runtime/host-main.cjs#L475694-L475702) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254918-254926](../../../../../reference/runtime/sand-eval-runner.cjs#L254918-L254926) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475694

Calls written directly in this body: `new InteractionResponse`.

SHA-256 of the source span: `de17d1486a3a8ebb47ab8addcf517221f075c341c52d2d2dd7797e9f0b34c367`.

### evaluation:254918

Calls written directly in this body: `new InteractionResponse`.

SHA-256 of the source span: `de17d1486a3a8ebb47ab8addcf517221f075c341c52d2d2dd7797e9f0b34c367`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
