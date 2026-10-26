# `firstGrokSentMessageId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755644-755646](../../../../../../../../reference/runtime/host-main.cjs#L755644-L755646) | `FunctionDeclaration` | no | `searchText` |
| [evaluation:541519-541521](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541519-L541521) | `FunctionDeclaration` | no | `searchText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755644-755646](../../../../../../../../reference/runtime/host-main.cjs#L755644-L755646) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541519-541521](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541519-L541521) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755644

Calls written directly in this body: `grokGmailSentMessages`.

SHA-256 of the source span: `64935af557fe075ac4ec231fa39d4ece66f573d4a60c86c393d8440d876c509a`.

### evaluation:541519

Calls written directly in this body: `grokGmailSentMessages`.

SHA-256 of the source span: `64935af557fe075ac4ec231fa39d4ece66f573d4a60c86c393d8440d876c509a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
