# `queryTerms2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/plugin-search/plugin-search.ts` · [Module README](../../../../../../../modules/core/runner/tools/plugin-search/plugin-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779480-779486](../../../../../../../../reference/runtime/host-main.cjs#L779480-L779486) | `FunctionDeclaration` | no | `query2` |
| [evaluation:579718-579724](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579718-L579724) | `FunctionDeclaration` | no | `query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779480-779486](../../../../../../../../reference/runtime/host-main.cjs#L779480-L779486) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579718-579724](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579718-L579724) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:779480

Calls written directly in this body: `.filter`, `.split`, `new Set`, `query2.toLowerCase`.

SHA-256 of the source span: `fe75148ad79aee7a0997cafe2156b04dfbfd9422a51ecf6830ca6633f2f84118`.

### evaluation:579718

Calls written directly in this body: `.filter`, `.split`, `new Set`, `query2.toLowerCase`.

SHA-256 of the source span: `fe75148ad79aee7a0997cafe2156b04dfbfd9422a51ecf6830ca6633f2f84118`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
