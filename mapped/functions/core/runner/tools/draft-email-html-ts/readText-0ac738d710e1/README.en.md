# `readText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:539543-539546](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539543-L539546) | `FunctionDeclaration` | no | `reading, text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:539543-539546](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539543-L539546) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:539543

Calls written directly in this body: `reading.words.push`, `wordsOf2`.

Assignment or increment targets: `reading.link.text`.

SHA-256 of the source span: `8e9f0b3e7b5e036e235953dc1d2d49950dd5e60d082ababc94b53877daed864d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
