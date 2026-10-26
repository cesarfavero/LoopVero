# `ownSignatureBelowQuote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755692-755697](../../../../../../../../reference/runtime/host-main.cjs#L755692-L755697) | `FunctionDeclaration` | no | `afterQuote` |
| [evaluation:541567-541572](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541567-L541572) | `FunctionDeclaration` | no | `afterQuote` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755692-755697](../../../../../../../../reference/runtime/host-main.cjs#L755692-L755697) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:541567-541572](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541567-L541572) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:755692

Calls written directly in this body: `/^[\s-]*$/.test`, `GMAIL_QUOTE_OPEN.test`, `GMAIL_SIGNATURE_OPEN.exec`, `afterQuote.slice`, `plainText`.

SHA-256 of the source span: `f51e29f0d8fd8abc932f11aa53c04cc66b1024b51adcc36b5f0ff68e36bbefd3`.

### evaluation:541567

Calls written directly in this body: `/^[\s-]*$/.test`, `GMAIL_QUOTE_OPEN.test`, `GMAIL_SIGNATURE_OPEN.exec`, `afterQuote.slice`, `plainText`.

SHA-256 of the source span: `033815edf5945abe4203eea2f2f0c6335091ba821774f12edacdfe8b1c99a683`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
