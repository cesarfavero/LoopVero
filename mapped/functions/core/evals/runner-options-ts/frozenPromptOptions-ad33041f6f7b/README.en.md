# `frozenPromptOptions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/evals/runner-options.ts` · [Module README](../../../../../modules/core/evals/runner-options-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596758-596772](../../../../../../reference/runtime/sand-eval-runner.cjs#L596758-L596772) | `FunctionDeclaration` | no | `options2, gates, host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596758-596772](../../../../../../reference/runtime/sand-eval-runner.cjs#L596758-L596772) | 2 | 0 | 0 | 2 | 1 | 0 |

### evaluation:596758

Calls written directly in this body: `new Error`, `resolveSandFrozenPrompt`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `24568fd39f6039f6a33f48f32604b7d3fdc18cbe6d26865d0f59b44fa111abe3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
