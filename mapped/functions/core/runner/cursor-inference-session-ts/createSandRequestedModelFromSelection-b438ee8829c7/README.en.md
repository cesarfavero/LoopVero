# `createSandRequestedModelFromSelection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `core/runner/cursor-inference-session.ts` · [Module README](../../../../../modules/core/runner/cursor-inference-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:597500-597511](../../../../../../reference/runtime/sand-eval-runner.cjs#L597500-L597511) | `FunctionDeclaration` | no | `selection` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:597500-597511](../../../../../../reference/runtime/sand-eval-runner.cjs#L597500-L597511) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:597500

Calls written directly in this body: `new RequestedModel`, `selection.parameters.map`.

SHA-256 of the source span: `8717298bb945f9d21c11ee8fe9620135dac53c7ec82ab662f58cb2b4f1df4655`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
