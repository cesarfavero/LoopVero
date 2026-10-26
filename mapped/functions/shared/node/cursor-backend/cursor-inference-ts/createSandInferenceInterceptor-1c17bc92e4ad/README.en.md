# `createSandInferenceInterceptor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225107-225146](../../../../../../../reference/runtime/host-main.cjs#L225107-L225146) | `FunctionDeclaration` | no | `options2` |
| [evaluation:512170-512209](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512170-L512209) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225107-225146](../../../../../../../reference/runtime/host-main.cjs#L225107-L225146) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512170-512209](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512170-L512209) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225107

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `8f145093dffa32fddcf54af114727a65c1cece0ef5ebe4ae9cd0907f068ca0cd`.

### evaluation:512170

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `a68f6ffcfd67064c3f6fea944f196bf9b89e86a3cac94bd93086976d0bb16dd2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
