# `toModelVisibleAssistantMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/model-visible-path-middleware.ts` · [Module README](../../../../../modules/core/runner/model-visible-path-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586794-586807](../../../../../../reference/runtime/sand-eval-runner.cjs#L586794-L586807) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586794-586807](../../../../../../reference/runtime/sand-eval-runner.cjs#L586794-L586807) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:586794

Calls written directly in this body: `rewroteAnyText`, `toModelVisibleAssistantContent`.

SHA-256 of the source span: `061ba58d26029bd07e25dc1b9bf4eb16f587e1994e6c624dbbba9695b2c7ceb9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
