# `assistantTextOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/model-visible-path-middleware.ts` · [Module README](../../../../../modules/core/runner/model-visible-path-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586782-586789](../../../../../../reference/runtime/sand-eval-runner.cjs#L586782-L586789) | `FunctionDeclaration` | no | `content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586782-586789](../../../../../../reference/runtime/sand-eval-runner.cjs#L586782-L586789) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:586782

Calls written directly in this body: `content.flatMap`.

SHA-256 of the source span: `0e2ed309a294f45fa54f75372253ff6a3e9d7f578445f16043b8188cffdbef22`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
