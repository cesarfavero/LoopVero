# `gmailSendAsSignatureHtml`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755808-755810](../../../../../../../../reference/runtime/host-main.cjs#L755808-L755810) | `FunctionDeclaration` | no | `entries, sendingAddress` |
| [evaluation:541683-541685](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541683-L541685) | `FunctionDeclaration` | no | `entries, sendingAddress` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755808-755810](../../../../../../../../reference/runtime/host-main.cjs#L755808-L755810) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541683-541685](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541683-L541685) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:755808

Calls written directly in this body: `finishedSignature`, `sendAsSignatureOf`.

SHA-256 of the source span: `ddddc41bbc7c23b65daadd0978a2add79a88a765086a326ae33f64f27b8e9c06`.

### evaluation:541683

Calls written directly in this body: `finishedSignature`, `sendAsSignatureOf`.

SHA-256 of the source span: `ddddc41bbc7c23b65daadd0978a2add79a88a765086a326ae33f64f27b8e9c06`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
