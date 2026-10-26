# `sameAutoReviewModes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/auto-review-gate.ts` · [Module README](../../../../../modules/core/runner/auto-review-gate-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490113-490116](../../../../../../reference/runtime/sand-eval-runner.cjs#L490113-L490116) | `FunctionDeclaration` | no | `a, b2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490113-490116](../../../../../../reference/runtime/sand-eval-runner.cjs#L490113-L490116) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490113

Calls written directly in this body: `.every`, `Object.entries`, `new Map`.

SHA-256 of the source span: `9f554cb777336b9a3fe8401aea12ba658d21c7d687081f7da5b30edde881dd15`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
