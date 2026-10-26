# `buildContentSnippet`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/agent-content-search.ts` · [Module README](../../../../../../modules/host/extensions/content-search/agent-content-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541783-541794](../../../../../../../reference/runtime/host-main.cjs#L541783-L541794) | `FunctionDeclaration` | no | `text3, normalizedQuery` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541783-541794](../../../../../../../reference/runtime/host-main.cjs#L541783-L541794) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:541783

Calls written directly in this body: `.indexOf`, `Math.max`, `Math.min`, `flat.slice`, `flat.toLowerCase`, `flatten`.

SHA-256 of the source span: `1541f2ad4ec55ccdf7d14565110f7146aae08654b736211770a7dde07c58c7ba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
