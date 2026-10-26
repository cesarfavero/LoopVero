# `tagsNestReliably`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755698-755711](../../../../../../../../reference/runtime/host-main.cjs#L755698-L755711) | `FunctionDeclaration` | no | `html` |
| [evaluation:541573-541586](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541573-L541586) | `FunctionDeclaration` | no | `html` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755698-755711](../../../../../../../../reference/runtime/host-main.cjs#L755698-L755711) | 2 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:541573-541586](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541573-L541586) | 2 | 1 | 0 | 3 | 0 | 0 |

### host:755698

Calls written directly in this body: `.every`, `/"[^"]*[<>]|'[^']*[<>]/.test`, `COMMENT_OR_RAW_TEXT.test`, `html.matchAll`.

SHA-256 of the source span: `117e048ab6ffb098592772b5d2d007325a3309e8f14d237e38e2963b0672c9e9`.

### evaluation:541573

Calls written directly in this body: `.every`, `/"[^"]*[<>]|'[^']*[<>]/.test`, `COMMENT_OR_RAW_TEXT.test`, `html.matchAll`.

SHA-256 of the source span: `117e048ab6ffb098592772b5d2d007325a3309e8f14d237e38e2963b0672c9e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
