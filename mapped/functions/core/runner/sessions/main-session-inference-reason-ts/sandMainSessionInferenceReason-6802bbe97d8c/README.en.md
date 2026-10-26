# `sandMainSessionInferenceReason`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `core/runner/sessions/main-session-inference-reason.ts` · [Module README](../../../../../../modules/core/runner/sessions/main-session-inference-reason-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590415-590420](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590415-L590420) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590415-590420](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590415-L590420) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:590415

Calls written directly in this body: `isMediaReviewSubagent`.

SHA-256 of the source span: `7ca72a8bae49848ead659c15deee305fff6d2308b0cdf7e951be5cd54fbf9e9c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
