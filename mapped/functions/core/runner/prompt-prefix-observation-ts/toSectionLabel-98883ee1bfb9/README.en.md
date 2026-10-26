# `toSectionLabel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-prefix-observation.ts` · [Module README](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:546600-546602](../../../../../../reference/runtime/sand-eval-runner.cjs#L546600-L546602) | `FunctionDeclaration` | no | `change` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546600-546602](../../../../../../reference/runtime/sand-eval-runner.cjs#L546600-L546602) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:546600

Calls written directly in this body: `change.slice`, `change.startsWith`.

SHA-256 of the source span: `adcaba1903f1cab46868d95a0976b6267adbe1122004a86e9af2d582f887857f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
