# `originatingFlowOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/originating-flow.ts` · [Module README](../../../../modules/core/originating-flow-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566742-566744](../../../../../reference/runtime/sand-eval-runner.cjs#L566742-L566744) | `FunctionDeclaration` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566742-566744](../../../../../reference/runtime/sand-eval-runner.cjs#L566742-L566744) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:566742

Calls written directly in this body: `ctx.get`, `parseOriginatingFlow`.

SHA-256 of the source span: `d0eef8e66588af2524ab1acd36116be44759a0db9ae8addd010e2b3a9023ec67`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
