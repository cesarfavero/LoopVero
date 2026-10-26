# `unavailableGenerateImageResources`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/evals/runner-options.ts` · [Module README](../../../../../modules/core/evals/runner-options-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596570-596589](../../../../../../reference/runtime/sand-eval-runner.cjs#L596570-L596589) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596570-596589](../../../../../../reference/runtime/sand-eval-runner.cjs#L596570-L596589) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596570

Calls written directly in this body: `new RegistryResourceAccessor`, `registry3.register`.

SHA-256 of the source span: `f8eeec4255b0e1f0fd1678a7fa6f34b27c0e61434672f2fe1aa3bd0fdee6d089`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
