# `withoutGmailQuotes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755718-755730](../../../../../../../../reference/runtime/host-main.cjs#L755718-L755730) | `FunctionDeclaration` | no | `html, readBelowQuotes` |
| [evaluation:541593-541605](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541593-L541605) | `FunctionDeclaration` | no | `html, readBelowQuotes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755718-755730](../../../../../../../../reference/runtime/host-main.cjs#L755718-L755730) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:541593-541605](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541593-L541605) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:755718

Calls written directly in this body: `GMAIL_QUOTE_OPEN.exec`, `closingDiv`, `isGmailQuoteContainer`, `ownSignatureBelowQuote`, `rest.slice`.

Assignment or increment targets: `kept`, `open13`, `rest`.

SHA-256 of the source span: `194ada0890c45c83a114974a74aff86e79bd5de66ecf7a40367d92251c5de6de`.

### evaluation:541593

Calls written directly in this body: `GMAIL_QUOTE_OPEN.exec`, `closingDiv`, `isGmailQuoteContainer`, `ownSignatureBelowQuote`, `rest.slice`.

Assignment or increment targets: `kept`, `open4`, `rest`.

SHA-256 of the source span: `1ecd68bd5c7a9883fde5aebd42a37a072b47b6a62b3f0b9900eb12fbf175a17c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
