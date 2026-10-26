# `firstPageOn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-takeover.ts` · [Module README](../../../../../modules/core/box/box-takeover-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775948-775954](../../../../../../reference/runtime/host-main.cjs#L775948-L775954) | `FunctionDeclaration` | no | `pages, keys, keyOf` |
| [evaluation:575605-575611](../../../../../../reference/runtime/sand-eval-runner.cjs#L575605-L575611) | `FunctionDeclaration` | no | `pages, keys, keyOf` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775948-775954](../../../../../../reference/runtime/host-main.cjs#L775948-L775954) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:575605-575611](../../../../../../reference/runtime/sand-eval-runner.cjs#L575605-L575611) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:775948

Calls written directly in this body: `pages.find`.

SHA-256 of the source span: `a9ad0d6e527645251ee56bcd05b5ee1f2e76fe9500b46d153960514cf359dd17`.

### evaluation:575605

Calls written directly in this body: `pages.find`.

SHA-256 of the source span: `a9ad0d6e527645251ee56bcd05b5ee1f2e76fe9500b46d153960514cf359dd17`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
