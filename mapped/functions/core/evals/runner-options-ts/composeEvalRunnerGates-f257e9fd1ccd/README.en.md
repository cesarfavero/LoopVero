# `composeEvalRunnerGates`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/evals/runner-options.ts` · [Module README](../../../../../modules/core/evals/runner-options-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596591-596744](../../../../../../reference/runtime/sand-eval-runner.cjs#L596591-L596744) | `FunctionDeclaration` | no | `overrides = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596591-596744](../../../../../../reference/runtime/sand-eval-runner.cjs#L596591-L596744) | 2 | 1 | 0 | 1 | 0 | 0 |

### evaluation:596591

Calls written directly in this body: `composeSandRunnerGates`, `fixedGate`, `isKeyOf`.

Assignment or increment targets: `gates[computed]`.

SHA-256 of the source span: `e6e507662a3158d4098b829c60d1a37d03f4c72bb131dd1deb6ccf452b6a4b5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
