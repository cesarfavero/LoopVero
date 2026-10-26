# `mergeUserMemoryShards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536407-536442](../../../../../../reference/runtime/sand-eval-runner.cjs#L536407-L536442) | `FunctionDeclaration` | no | `shards, limits, ownAgentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536407-536442](../../../../../../reference/runtime/sand-eval-runner.cjs#L536407-L536442) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:536407

Calls written directly in this body: `.map`, `JSON.stringify`, `merge4`, `sha256HexOfText`, `shards.filter`, `shards.some`.

SHA-256 of the source span: `fb5f96b7b26d65cf59e5c5e44ca74be368d2a36d725a407bfe799251711f0060`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
