# `parsedModelArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/evals/turn-transcript.ts` · [Module README](../../../../../modules/core/evals/turn-transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628487-628494](../../../../../../reference/runtime/sand-eval-runner.cjs#L628487-L628494) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628487-628494](../../../../../../reference/runtime/sand-eval-runner.cjs#L628487-L628494) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:628487

Calls written directly in this body: `decodeSandToolActivity`, `isUnknownRecord2`, `parseJsonOrUndefined2`.

SHA-256 of the source span: `8e149f1f9b79b72e4801c79e65f9501181106ac208d013a501a3bbde61750b9e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
