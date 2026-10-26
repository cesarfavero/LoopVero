# `isFiniteNumber`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/render-cards.ts` · [Module README](../../../../../modules/shared/transcript/render-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707799-707801](../../../../../../reference/runtime/host-main.cjs#L707799-L707801) | `FunctionDeclaration` | no | `value` |
| [evaluation:564286-564288](../../../../../../reference/runtime/sand-eval-runner.cjs#L564286-L564288) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707799-707801](../../../../../../reference/runtime/host-main.cjs#L707799-L707801) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564286-564288](../../../../../../reference/runtime/sand-eval-runner.cjs#L564286-L564288) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707799

Calls written directly in this body: `Number.isFinite`.

SHA-256 of the source span: `264003495398401db416bc7513eac09ca708810b7f673bf3583f0e516bde6b22`.

### evaluation:564286

Calls written directly in this body: `Number.isFinite`.

SHA-256 of the source span: `264003495398401db416bc7513eac09ca708810b7f673bf3583f0e516bde6b22`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
