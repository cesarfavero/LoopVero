# `createSandEvalInference`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `evaluation/inference.ts` · [Module README](../../../../modules/evaluation/inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:597549-597577](../../../../../reference/runtime/sand-eval-runner.cjs#L597549-L597577) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:597549-597577](../../../../../reference/runtime/sand-eval-runner.cjs#L597549-L597577) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:597549

Calls written directly in this body: `createSandAttachedMediaUrlProvider`.

SHA-256 of the source span: `3f3b6b644ce2826b7adc028cdb55028c99c58aaea652b1f4c3c76c03953b10e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
