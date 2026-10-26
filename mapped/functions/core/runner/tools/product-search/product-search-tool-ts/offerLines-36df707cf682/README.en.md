# `offerLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/product-search/product-search-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/product-search/product-search-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781920-781940](../../../../../../../../reference/runtime/host-main.cjs#L781920-L781940) | `FunctionDeclaration` | no | `offer` |
| [evaluation:582265-582285](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582265-L582285) | `FunctionDeclaration` | no | `offer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781920-781940](../../../../../../../../reference/runtime/host-main.cjs#L781920-L781940) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:582265-582285](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582265-L582285) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:781920

Calls written directly in this body: `.map`, `fieldLines`, `optionBlock`.

SHA-256 of the source span: `79627b24e0afd5dc24f148c9b00360e3cd154719f771bd84ac598a88b6d9fbcf`.

### evaluation:582265

Calls written directly in this body: `.map`, `fieldLines`, `optionBlock`.

SHA-256 of the source span: `79627b24e0afd5dc24f148c9b00360e3cd154719f771bd84ac598a88b6d9fbcf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
