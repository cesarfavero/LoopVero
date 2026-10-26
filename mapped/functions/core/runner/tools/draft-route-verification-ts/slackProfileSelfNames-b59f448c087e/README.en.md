# `slackProfileSelfNames`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735163-735170](../../../../../../../reference/runtime/host-main.cjs#L735163-L735170) | `FunctionDeclaration` | no | `authedProfileText` |
| [evaluation:540737-540744](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540737-L540744) | `FunctionDeclaration` | no | `authedProfileText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735163-735170](../../../../../../../reference/runtime/host-main.cjs#L735163-L735170) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540737-540744](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540737-L540744) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:735163

Calls written directly in this body: `.filter`, `.map`, `slackProfileField`.

SHA-256 of the source span: `5b78da85a5ad572748fcc950a8a32ed9da3a997bdcede137dbb68342c5cd0849`.

### evaluation:540737

Calls written directly in this body: `.filter`, `.map`, `slackProfileField`.

SHA-256 of the source span: `5b78da85a5ad572748fcc950a8a32ed9da3a997bdcede137dbb68342c5cd0849`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
