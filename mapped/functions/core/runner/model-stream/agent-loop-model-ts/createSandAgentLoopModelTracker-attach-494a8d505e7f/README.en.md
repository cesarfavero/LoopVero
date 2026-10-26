# `createSandAgentLoopModelTracker/attach`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/model-stream/agent-loop-model.ts` · [Module README](../../../../../../modules/core/runner/model-stream/agent-loop-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:513790-513793](../../../../../../../reference/runtime/sand-eval-runner.cjs#L513790-L513793) | `FunctionExpression` | no | `next` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:513790-513793](../../../../../../../reference/runtime/sand-eval-runner.cjs#L513790-L513793) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:513790

Calls written directly in this body: `next.getResolvedModelId`.

Assignment or increment targets: `initialServedModel`, `session`.

SHA-256 of the source span: `33a2f09609e828ff7390f70bd30f08c10cd52c158def08ac3af710d85eb6cf29`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
