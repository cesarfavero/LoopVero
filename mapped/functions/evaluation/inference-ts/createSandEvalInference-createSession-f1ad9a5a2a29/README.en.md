# `createSandEvalInference/createSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `evaluation/inference.ts` · [Module README](../../../../modules/evaluation/inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:597560-597575](../../../../../reference/runtime/sand-eval-runner.cjs#L597560-L597575) | `ArrowFunctionExpression` | no | `onRequestId, sessionOptions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:597560-597575](../../../../../reference/runtime/sand-eval-runner.cjs#L597560-L597575) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:597560

Calls written directly in this body: `createCursorInferencePromptSession`, `createSandRequestedModelFromSelection`, `createSandSubagentRequestedModel`.

SHA-256 of the source span: `f9ee522741542bb86a2776a23e211cc504e6461a858b9c258d501a3c71c8f5a5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
