# `boundMarketplaceSearch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/marketplace-search.ts` · [Module README](../../../../../modules/shared/mcp/marketplace-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779191-779206](../../../../../../reference/runtime/host-main.cjs#L779191-L779206) | `FunctionDeclaration` | no | `input2` |
| [evaluation:579363-579378](../../../../../../reference/runtime/sand-eval-runner.cjs#L579363-L579378) | `FunctionDeclaration` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779191-779206](../../../../../../reference/runtime/host-main.cjs#L779191-L779206) | 4 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:579363-579378](../../../../../../reference/runtime/sand-eval-runner.cjs#L579363-L579378) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:779191

Calls written directly in this body: `.join`, `.slice`, `Array.from`, `input2.pluginIds.slice`, `input2.query.trim`, `nonEmptyId`.

SHA-256 of the source span: `2267fff1f510f1c508ca320bf89f69df2d85efe59610e7808afa01323a4bb682`.

### evaluation:579363

Calls written directly in this body: `.join`, `.slice`, `Array.from`, `input2.pluginIds.slice`, `input2.query.trim`, `nonEmptyId`.

SHA-256 of the source span: `687e92f87f0edad421509248df7ed8d505a3e97c69271c742630abc04ff8dc4f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
