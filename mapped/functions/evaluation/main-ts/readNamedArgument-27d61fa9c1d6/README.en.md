# `readNamedArgument`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/main.ts` · [Module README](../../../../modules/evaluation/main-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630734-630741](../../../../../reference/runtime/sand-eval-runner.cjs#L630734-L630741) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630734-630741](../../../../../reference/runtime/sand-eval-runner.cjs#L630734-L630741) | 2 | 0 | 0 | 1 | 1 | 0 |

### evaluation:630734

Calls written directly in this body: `new SandEvalRunnerConfigurationError`, `process.argv.indexOf`.

Explicit throw targets: `SandEvalRunnerConfigurationError`.

SHA-256 of the source span: `fe1bac10edf07b7e46e3028058e3ea1e1983714577f18f973bec0346a16468f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
