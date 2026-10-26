# `nativeProviderSearchNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/plugin-search/plugin-search.ts` · [Module README](../../../../../../../modules/core/runner/tools/plugin-search/plugin-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779531-779534](../../../../../../../../reference/runtime/host-main.cjs#L779531-L779534) | `FunctionDeclaration` | no | `query2` |
| [evaluation:579769-579772](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579769-L579772) | `FunctionDeclaration` | no | `query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779531-779534](../../../../../../../../reference/runtime/host-main.cjs#L779531-L779534) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:579769-579772](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579769-L579772) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:779531

Calls written directly in this body: `.some`, `queryTerms2`.

SHA-256 of the source span: `3545fd0c18e9fb3f2f0dce14657bbbc32ec86c6f3df102d78b91657672ef9763`.

### evaluation:579769

Calls written directly in this body: `.some`, `queryTerms2`.

SHA-256 of the source span: `3545fd0c18e9fb3f2f0dce14657bbbc32ec86c6f3df102d78b91657672ef9763`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
