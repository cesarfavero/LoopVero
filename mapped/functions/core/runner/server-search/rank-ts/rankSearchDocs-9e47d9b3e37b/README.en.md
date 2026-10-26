# `rankSearchDocs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/server-search/rank.ts` · [Module README](../../../../../../modules/core/runner/server-search/rank-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765921-765926](../../../../../../../reference/runtime/host-main.cjs#L765921-L765926) | `FunctionDeclaration` | yes | `items, query2, options2` |
| [evaluation:559285-559290](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559285-L559290) | `FunctionDeclaration` | yes | `items, query2, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765921-765926](../../../../../../../reference/runtime/host-main.cjs#L765921-L765926) | 1 | 0 | 2 | 2 | 0 | 0 |
| [evaluation:559285-559290](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559285-L559290) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:765921

Calls written directly in this body: `.rank`, `createSearchIndex`, `new Set`, `queryWords`.

SHA-256 of the source span: `4b536d0e272ba0688eec50520071930e45ba0cd7c3073080ce2003b64376f104`.

### evaluation:559285

Calls written directly in this body: `.rank`, `createSearchIndex`, `new Set`, `queryWords`.

SHA-256 of the source span: `4b536d0e272ba0688eec50520071930e45ba0cd7c3073080ce2003b64376f104`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
