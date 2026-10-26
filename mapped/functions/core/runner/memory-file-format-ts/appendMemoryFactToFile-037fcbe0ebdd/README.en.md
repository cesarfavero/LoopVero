# `appendMemoryFactToFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-file-format.ts` · [Module README](../../../../../modules/core/runner/memory-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536606-536610](../../../../../../reference/runtime/sand-eval-runner.cjs#L536606-L536610) | `FunctionDeclaration` | no | `raw, kind, content, createdAt, provenance` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536606-536610](../../../../../../reference/runtime/sand-eval-runner.cjs#L536606-L536610) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536606

Calls written directly in this body: `appendMemoryFactLinesToFile`, `serializeMemoryFactLine`.

SHA-256 of the source span: `fa1e5759742f00196f8fd38788ac2213fceb7c896e4aa09623d5cf295962b415`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
