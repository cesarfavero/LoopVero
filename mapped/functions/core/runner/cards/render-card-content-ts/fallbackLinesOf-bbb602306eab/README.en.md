# `fallbackLinesOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/render-card-content.ts` · [Module README](../../../../../../modules/core/runner/cards/render-card-content-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758025-758027](../../../../../../../reference/runtime/host-main.cjs#L758025-L758027) | `FunctionDeclaration` | no | `entry` |
| [evaluation:544123-544125](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544123-L544125) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758025-758027](../../../../../../../reference/runtime/host-main.cjs#L758025-L758027) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:544123-544125](../../../../../../../reference/runtime/sand-eval-runner.cjs#L544123-L544125) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:758025

Calls written directly in this body: `.filter`, `.map`, `entry.fallbackText.split`.

SHA-256 of the source span: `1cd950c287530fb508a62b54f90408f1708433a13147a63c92b725d49e51587a`.

### evaluation:544123

Calls written directly in this body: `.filter`, `.map`, `entry.fallbackText.split`.

SHA-256 of the source span: `1cd950c287530fb508a62b54f90408f1708433a13147a63c92b725d49e51587a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
