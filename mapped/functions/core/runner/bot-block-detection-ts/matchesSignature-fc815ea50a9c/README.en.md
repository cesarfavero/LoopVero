# `matchesSignature`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/bot-block-detection.ts` · [Module README](../../../../../modules/core/runner/bot-block-detection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:484439-484441](../../../../../../reference/runtime/sand-eval-runner.cjs#L484439-L484441) | `FunctionDeclaration` | no | `signature, page` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484439-484441](../../../../../../reference/runtime/sand-eval-runner.cjs#L484439-L484441) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:484439

Calls written directly in this body: `matchesHost`, `matchesPath`, `matchesTitle`.

SHA-256 of the source span: `4bed34bc6838d7db8650ec96c0c469f81751c4ad046f9e6fab394abb805137b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
