# `mergeUserMemoryShards/merge4/tag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536409-536413](../../../../../../reference/runtime/sand-eval-runner.cjs#L536409-L536413) | `ArrowFunctionExpression` | no | `records2, shard` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536409-536413](../../../../../../reference/runtime/sand-eval-runner.cjs#L536409-L536413) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:536409 uses an implicit arrow-function return.

### evaluation:536409

Calls written directly in this body: `records2.map`.

SHA-256 of the source span: `9e57215377d96a431b7258e35f4e0268fb1fcb13d81488695b2e79b3ca99ef69`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
