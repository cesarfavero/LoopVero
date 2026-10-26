# `windowOf2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/virtual-mounts/in-process-search.ts` · [Module README](../../../../../modules/core/virtual-mounts/in-process-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766060-766076](../../../../../../reference/runtime/host-main.cjs#L766060-L766076) | `FunctionDeclaration` | no | `items, window2, defaultLimit` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766060-766076](../../../../../../reference/runtime/host-main.cjs#L766060-L766076) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:766060

Calls written directly in this body: `Math.ceil`, `Math.max`, `Math.min`, `items.slice`.

Assignment or increment targets: `end`.

SHA-256 of the source span: `f8468a884a91ce67ad4a8fb35276a5ab975adcbb90eb8d4ad8d9a43b95b0bf70`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
