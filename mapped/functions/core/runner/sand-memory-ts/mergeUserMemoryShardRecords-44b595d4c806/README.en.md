# `mergeUserMemoryShardRecords`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/sand-memory.ts` · [Module README](../../../../../modules/core/runner/sand-memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536443-536452](../../../../../../reference/runtime/sand-eval-runner.cjs#L536443-L536452) | `FunctionDeclaration` | no | `shards` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536443-536452](../../../../../../reference/runtime/sand-eval-runner.cjs#L536443-L536452) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536443

Calls written directly in this body: `mergeProvenanced`, `shards.flatMap`.

SHA-256 of the source span: `4af7f57293e88beac27baee7bff851063ec8a053ac898549f30a4cd88d1970df`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
