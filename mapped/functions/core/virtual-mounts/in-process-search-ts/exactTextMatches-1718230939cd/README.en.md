# `exactTextMatches`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/virtual-mounts/in-process-search.ts` · [Module README](../../../../../modules/core/virtual-mounts/in-process-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765998-766001](../../../../../../reference/runtime/host-main.cjs#L765998-L766001) | `FunctionDeclaration` | no | `docs, query2, limit3, order` |
| [evaluation:559362-559365](../../../../../../reference/runtime/sand-eval-runner.cjs#L559362-L559365) | `FunctionDeclaration` | no | `docs, query2, limit3, order` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765998-766001](../../../../../../reference/runtime/host-main.cjs#L765998-L766001) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559362-559365](../../../../../../reference/runtime/sand-eval-runner.cjs#L559362-L559365) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765998

Calls written directly in this body: `.map`, `.slice`, `.sort`, `docs.filter`, `query2.toLowerCase`.

SHA-256 of the source span: `9512dec0d5ea579cad8819a22f5d6b2c1f09db26ac3fc6ca8134bde260140cb3`.

### evaluation:559362

Calls written directly in this body: `.map`, `.slice`, `.sort`, `docs.filter`, `query2.toLowerCase`.

SHA-256 of the source span: `9512dec0d5ea579cad8819a22f5d6b2c1f09db26ac3fc6ca8134bde260140cb3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
