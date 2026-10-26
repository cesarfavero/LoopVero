# `recallMemoryFolder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-file-format.ts` · [Module README](../../../../../modules/core/runner/memory-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536598-536605](../../../../../../reference/runtime/sand-eval-runner.cjs#L536598-L536605) | `FunctionDeclaration` | no | `facts, recentLimit` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536598-536605](../../../../../../reference/runtime/sand-eval-runner.cjs#L536598-L536605) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536598

Calls written directly in this body: `.map`, `.slice`, `.sort`, `Math.floor`, `Number.isFinite`.

SHA-256 of the source span: `8c152a9d7408ec1dce9f123a01a52d4581cc9864caa6cd6efbbb2752b2f648c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
