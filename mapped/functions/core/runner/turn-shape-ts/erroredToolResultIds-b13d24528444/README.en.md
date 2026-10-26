# `erroredToolResultIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-shape.ts` · [Module README](../../../../../modules/core/runner/turn-shape-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587177-587193](../../../../../../reference/runtime/sand-eval-runner.cjs#L587177-L587193) | `FunctionDeclaration` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587177-587193](../../../../../../reference/runtime/sand-eval-runner.cjs#L587177-L587193) | 4 | 2 | 0 | 1 | 0 | 0 |

### evaluation:587177

Calls written directly in this body: `Array.isArray`, `ids.add`, `new Set`.

SHA-256 of the source span: `9935e682a9435e9f6020c8596539e7e852f8c706893155ce12f19cb5da897e8d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
