# `ownPart`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755731-755737](../../../../../../../../reference/runtime/host-main.cjs#L755731-L755737) | `FunctionDeclaration` | no | `messageHtml` |
| [evaluation:541606-541612](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541606-L541612) | `FunctionDeclaration` | no | `messageHtml` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755731-755737](../../../../../../../../reference/runtime/host-main.cjs#L755731-L755737) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541606-541612](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541606-L541612) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755731

Calls written directly in this body: `QUOTE_START.exec`, `tagsNestReliably`, `unquoted.slice`, `withoutBlockquotes`, `withoutGmailQuotes`.

SHA-256 of the source span: `7ee4f602d53474e6919870ddc7c4f8723699d23f96057dacfaeb040975a2bdd6`.

### evaluation:541606

Calls written directly in this body: `QUOTE_START.exec`, `tagsNestReliably`, `unquoted.slice`, `withoutBlockquotes`, `withoutGmailQuotes`.

SHA-256 of the source span: `7ee4f602d53474e6919870ddc7c4f8723699d23f96057dacfaeb040975a2bdd6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
