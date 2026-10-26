# `trimUrlToken2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/link-checks/sent-link-checks.ts` · [Module README](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583431-583441](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583431-L583441) | `FunctionDeclaration` | no | `token` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583431-583441](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583431-L583441) | 2 | 1 | 0 | 1 | 0 | 0 |

### evaluation:583431

Calls written directly in this body: `URL_TRAILING_PUNCTUATION2.includes`, `token.charAt`, `token.slice`, `token.split`.

Assignment or increment targets: `end`, `unmatchedClose`.

SHA-256 of the source span: `fe07a5867bc539394ca926111b2da7b6a9b5978f01a025cbd7f32adece7c0d12`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
