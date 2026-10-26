# `splitStateToolForTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `shared/agents/state-tool-names.ts` · [Module README](../../../../../modules/shared/agents/state-tool-names-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:473385-473387](../../../../../../reference/runtime/sand-eval-runner.cjs#L473385-L473387) | `FunctionDeclaration` | no | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:473385-473387](../../../../../../reference/runtime/sand-eval-runner.cjs#L473385-L473387) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:473385

Calls written directly in this body: `SPLIT_TOOL_BY_TARGET.get`.

SHA-256 of the source span: `35efcea561524d078e2f1bc1a78b08bfc3a917f8e60b5ab49630c83e0a5a8631`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
