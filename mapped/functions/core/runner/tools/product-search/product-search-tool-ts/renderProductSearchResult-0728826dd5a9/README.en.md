# `renderProductSearchResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/product-search/product-search-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/product-search/product-search-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781962-781970](../../../../../../../../reference/runtime/host-main.cjs#L781962-L781970) | `FunctionDeclaration` | no | `query2, result` |
| [evaluation:582307-582315](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582307-L582315) | `FunctionDeclaration` | no | `query2, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781962-781970](../../../../../../../../reference/runtime/host-main.cjs#L781962-L781970) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:582307-582315](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582307-L582315) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:781962

Calls written directly in this body: `.join`, `result.products.map`, `result.warnings.join`, `sections.join`, `sections.push`.

SHA-256 of the source span: `490a633c3cd38aa8619c4d3879f0ca5b58394fb5ee3a77957950ac9b9cedb080`.

### evaluation:582307

Calls written directly in this body: `.join`, `result.products.map`, `result.warnings.join`, `sections.join`, `sections.push`.

SHA-256 of the source span: `490a633c3cd38aa8619c4d3879f0ca5b58394fb5ee3a77957950ac9b9cedb080`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
