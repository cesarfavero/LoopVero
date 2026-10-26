# `withSignedLookup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/bot-block-detection.ts` · [Module README](../../../../../modules/core/runner/bot-block-detection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:484586-484595](../../../../../../reference/runtime/sand-eval-runner.cjs#L484586-L484595) | `FunctionDeclaration` | no | `hit, url2, lookupSigned` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484586-484595](../../../../../../reference/runtime/sand-eval-runner.cjs#L484586-L484595) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:484586

Calls written directly in this body: `URL.canParse`, `lookupSigned`, `new URL`.

SHA-256 of the source span: `d8e0db447f00a76f2c7934a5813ff9f82c4afe93c6542263f8c5a56232616f64`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
