# `mergeUserMemoryShards/merge4`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536408-536424](../../../../../../reference/runtime/sand-eval-runner.cjs#L536408-L536424) | `ArrowFunctionExpression` | no | `selected` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536408-536424](../../../../../../reference/runtime/sand-eval-runner.cjs#L536408-L536424) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536408

Calls written directly in this body: `mergeProvenanced`, `selected.flatMap`.

SHA-256 of the source span: `a71cf2670570b85589b18c0bdc82b0e49a48b44ae08b6ec0063dbb61bfdd3d77`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
