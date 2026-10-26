# `grokSentMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755653-755661](../../../../../../../../reference/runtime/host-main.cjs#L755653-L755661) | `FunctionDeclaration` | no | `messageText, sendingAddress` |
| [evaluation:541528-541536](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541528-L541536) | `FunctionDeclaration` | no | `messageText3, sendingAddress` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755653-755661](../../../../../../../../reference/runtime/host-main.cjs#L755653-L755661) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:541528-541536](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541528-L541536) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:755653

Calls written directly in this body: `.toLowerCase`, `Array.isArray`, `grokGmailAddress`, `grokMessageRecord`, `grokSenderText`, `labels.includes`, `sendingAddress.toLowerCase`.

SHA-256 of the source span: `52983afcfa2c74b5e31bad8d9e19f4d6ea3bc9a9947467bb261fb2d0f69046c6`.

### evaluation:541528

Calls written directly in this body: `.toLowerCase`, `Array.isArray`, `grokGmailAddress`, `grokMessageRecord`, `grokSenderText`, `labels.includes`, `sendingAddress.toLowerCase`.

SHA-256 of the source span: `bb09675a34b2c5adc9c52a24a6998fcae2306fc0e64a54e1b0ba12e68334ca3e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
