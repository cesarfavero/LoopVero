# `hasDeliveryToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-shape.ts` · [Module README](../../../../../modules/core/runner/turn-shape-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587171-587173](../../../../../../reference/runtime/sand-eval-runner.cjs#L587171-L587173) | `FunctionDeclaration` | no | `calls` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587171-587173](../../../../../../reference/runtime/sand-eval-runner.cjs#L587171-L587173) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587171

Calls written directly in this body: `calls.some`.

SHA-256 of the source span: `eb1459925237ebced553cde2d7523a9f84d8c2a87d02b435e4fd5f546b250103`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
