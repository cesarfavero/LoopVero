# `bullets`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/product-search/product-search-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/product-search/product-search-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781914-781916](../../../../../../../../reference/runtime/host-main.cjs#L781914-L781916) | `FunctionDeclaration` | no | `items` |
| [evaluation:582259-582261](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582259-L582261) | `FunctionDeclaration` | no | `items` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781914-781916](../../../../../../../../reference/runtime/host-main.cjs#L781914-L781916) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:582259-582261](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582259-L582261) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:781914

Calls written directly in this body: `items.flatMap`.

SHA-256 of the source span: `b29ce5614c778e6379d0d5468383647509a69526d111af09299ad7cec1b51a11`.

### evaluation:582259

Calls written directly in this body: `items.flatMap`.

SHA-256 of the source span: `b29ce5614c778e6379d0d5468383647509a69526d111af09299ad7cec1b51a11`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
