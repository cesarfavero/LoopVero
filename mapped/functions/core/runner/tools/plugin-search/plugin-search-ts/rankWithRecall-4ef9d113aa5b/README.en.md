# `rankWithRecall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/plugin-search/plugin-search.ts` · [Module README](../../../../../../../modules/core/runner/tools/plugin-search/plugin-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779519-779524](../../../../../../../../reference/runtime/host-main.cjs#L779519-L779524) | `FunctionDeclaration` | no | `plugins, query2` |
| [evaluation:579757-579762](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579757-L579762) | `FunctionDeclaration` | no | `plugins, query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779519-779524](../../../../../../../../reference/runtime/host-main.cjs#L779519-L779524) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:579757-579762](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579757-L579762) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:779519

Calls written directly in this body: `.sort`, `queryTerms2`, `rankByTerms`, `terms.some`, `withAliases`.

SHA-256 of the source span: `da128468c844ff011ded594b2043895f4bca4280831054ce75f76c82911354f5`.

### evaluation:579757

Calls written directly in this body: `.sort`, `queryTerms2`, `rankByTerms`, `terms.some`, `withAliases`.

SHA-256 of the source span: `c86415aeda2f266dff15e94f79d2a0e9a5e9d6ecce3e66716fb9649378cd1357`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
