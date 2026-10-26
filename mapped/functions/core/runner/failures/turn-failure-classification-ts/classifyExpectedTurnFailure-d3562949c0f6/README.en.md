# `classifyExpectedTurnFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/failures/turn-failure-classification.ts` · [Module README](../../../../../../modules/core/runner/failures/turn-failure-classification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736157-736159](../../../../../../../reference/runtime/host-main.cjs#L736157-L736159) | `FunctionDeclaration` | no | `error64` |
| [evaluation:589657-589659](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589657-L589659) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736157-736159](../../../../../../../reference/runtime/host-main.cjs#L736157-L736159) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:589657-589659](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589657-L589659) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736157

Calls written directly in this body: `classifyExpectedTurnFailureDetails`.

SHA-256 of the source span: `fa82534666f0f3f83983ee1f08a9d0e81487b9986103b1badde25d552465108c`.

### evaluation:589657

Calls written directly in this body: `classifyExpectedTurnFailureDetails`.

SHA-256 of the source span: `6f39414d3aa47a9b39cb4951ecfe756f7e73a59311d5c51a8c72173ea2fce9a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
