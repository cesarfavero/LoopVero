# `canonicalRenderCardId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/render-card-registry.ts` · [Module README](../../../../../../modules/core/runner/cards/render-card-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741044-741046](../../../../../../../reference/runtime/host-main.cjs#L741044-L741046) | `FunctionDeclaration` | no | `id` |
| [evaluation:481939-481941](../../../../../../../reference/runtime/sand-eval-runner.cjs#L481939-L481941) | `FunctionDeclaration` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741044-741046](../../../../../../../reference/runtime/host-main.cjs#L741044-L741046) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:481939-481941](../../../../../../../reference/runtime/sand-eval-runner.cjs#L481939-L481941) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:741044

Calls written directly in this body: `id.toUpperCase`.

SHA-256 of the source span: `f2f2ab91f10f9d64061ebb97117e183cab6d69fbe9adfc1d3db94331427564d0`.

### evaluation:481939

Calls written directly in this body: `id.toUpperCase`.

SHA-256 of the source span: `f2f2ab91f10f9d64061ebb97117e183cab6d69fbe9adfc1d3db94331427564d0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
