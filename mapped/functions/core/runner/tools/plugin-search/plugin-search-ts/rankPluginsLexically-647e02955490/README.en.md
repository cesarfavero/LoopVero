# `rankPluginsLexically`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/plugin-search/plugin-search.ts` · [Module README](../../../../../../../modules/core/runner/tools/plugin-search/plugin-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779525-779530](../../../../../../../../reference/runtime/host-main.cjs#L779525-L779530) | `FunctionDeclaration` | no | `plugins, query2, options2 = {}` |
| [evaluation:579763-579768](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579763-L579768) | `FunctionDeclaration` | no | `plugins, query2, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779525-779530](../../../../../../../../reference/runtime/host-main.cjs#L779525-L779530) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:579763-579768](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579763-L579768) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:779525

Calls written directly in this body: `.filter`, `.sort`, `queryTerms2`, `rankByTerms`, `rankWithRecall`.

SHA-256 of the source span: `d9bab56f8e9dc26e5307faded60b5805ec60fef04ea2e8cd698c243316a10438`.

### evaluation:579763

Calls written directly in this body: `.filter`, `.sort`, `queryTerms2`, `rankByTerms`, `rankWithRecall`.

SHA-256 of the source span: `82ded7bfb9a69200fc76a5f3afb933f0fe7f4c2060bbded9dd98bdb13d069b08`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
