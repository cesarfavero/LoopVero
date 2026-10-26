# `applySandInferenceRequestContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225025-225040](../../../../../../../reference/runtime/host-main.cjs#L225025-L225040) | `FunctionDeclaration` | no | `headers, context2` |
| [evaluation:512088-512103](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512088-L512103) | `FunctionDeclaration` | no | `headers, context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225025-225040](../../../../../../../reference/runtime/host-main.cjs#L225025-L225040) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512088-512103](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512088-L512103) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:225025

Calls written directly in this body: `context2.inferenceProxyJwt.trim`, `headers.set`, `inferenceProxyJwt.startsWith`.

SHA-256 of the source span: `f968eab94dcd7a55db911a99f9bea557ff4966f97e9d1a5d73d1fc5519e49e4a`.

### evaluation:512088

Calls written directly in this body: `context2.inferenceProxyJwt.trim`, `headers.set`, `inferenceProxyJwt.startsWith`.

SHA-256 of the source span: `f968eab94dcd7a55db911a99f9bea557ff4966f97e9d1a5d73d1fc5519e49e4a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
