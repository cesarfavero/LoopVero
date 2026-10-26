# `withAliases`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/plugin-search/plugin-search.ts` · [Module README](../../../../../../../modules/core/runner/tools/plugin-search/plugin-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779490-779492](../../../../../../../../reference/runtime/host-main.cjs#L779490-L779492) | `FunctionDeclaration` | no | `terms` |
| [evaluation:579728-579730](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579728-L579730) | `FunctionDeclaration` | no | `terms` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779490-779492](../../../../../../../../reference/runtime/host-main.cjs#L779490-L779492) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579728-579730](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579728-L579730) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:779490

Calls written directly in this body: `new Set`, `terms.flatMap`.

SHA-256 of the source span: `deb31bbb10987db4cd9fdd7b58e85e92dddec438b51a0f06f25ec52afd651c78`.

### evaluation:579728

Calls written directly in this body: `new Set`, `terms.flatMap`.

SHA-256 of the source span: `deb31bbb10987db4cd9fdd7b58e85e92dddec438b51a0f06f25ec52afd651c78`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
