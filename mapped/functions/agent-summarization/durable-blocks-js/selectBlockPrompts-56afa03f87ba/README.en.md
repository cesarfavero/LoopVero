# `selectBlockPrompts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/durable-blocks.js` · [Module README](../../../../modules/agent-summarization/durable-blocks-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620059-620073](../../../../../reference/runtime/host-main.cjs#L620059-L620073) | `FunctionDeclaration` | no | `blocks, ids` |
| [evaluation:304413-304427](../../../../../reference/runtime/sand-eval-runner.cjs#L304413-L304427) | `FunctionDeclaration` | no | `blocks, ids` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620059-620073](../../../../../reference/runtime/host-main.cjs#L620059-L620073) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:304413-304427](../../../../../reference/runtime/sand-eval-runner.cjs#L304413-L304427) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:620059

Calls written directly in this body: `blocks.get`, `new Set`, `promptTexts.push`, `seen.add`, `seen.has`.

SHA-256 of the source span: `eee83fa79637ed00c888bc2ae4a5aef190d58ef3ca269e384ab3279aa44bf0ff`.

### evaluation:304413

Calls written directly in this body: `blocks.get`, `new Set`, `promptTexts.push`, `seen.add`, `seen.has`.

SHA-256 of the source span: `eee83fa79637ed00c888bc2ae4a5aef190d58ef3ca269e384ab3279aa44bf0ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
