# `getUserMemoryShardDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-file-format.ts` · [Module README](../../../../../modules/core/runner/memory-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536479-536481](../../../../../../reference/runtime/sand-eval-runner.cjs#L536479-L536481) | `FunctionDeclaration` | no | `sandRoot, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536479-536481](../../../../../../reference/runtime/sand-eval-runner.cjs#L536479-L536481) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536479

Calls written directly in this body: `getUserMemoryShardsDir`.

SHA-256 of the source span: `14733f70a624c91a395eb582d443d0fabdbcb3de7f96aa6ed885d580122cb2aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
