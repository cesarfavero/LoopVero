# `getUserMemoryShardsDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-file-format.ts` · [Module README](../../../../../modules/core/runner/memory-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536476-536478](../../../../../../reference/runtime/sand-eval-runner.cjs#L536476-L536478) | `FunctionDeclaration` | no | `sandRoot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536476-536478](../../../../../../reference/runtime/sand-eval-runner.cjs#L536476-L536478) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536476

Calls written directly in this body: `getUserMemoryDir`.

SHA-256 of the source span: `db62eb54907186f7c22baa6d58c5b5dfdd7bb514a97895f85c598076ef500a5a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
