# `resolveGmailSignature`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755833-755836](../../../../../../../../reference/runtime/host-main.cjs#L755833-L755836) | `FunctionDeclaration` | yes | `execute, route, sendingAddress` |
| [evaluation:541708-541711](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541708-L541711) | `FunctionDeclaration` | yes | `execute, route, sendingAddress` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755833-755836](../../../../../../../../reference/runtime/host-main.cjs#L755833-L755836) | 1 | 0 | 2 | 1 | 0 | 0 |
| [evaluation:541708-541711](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541708-L541711) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:755833

Calls written directly in this body: `finishedSignature`, `isGmailRoute`, `sendAsSignature`, `sentMessageSignature`.

SHA-256 of the source span: `5200e5d045c7b465a2affa2bcf315e8ca191d0cac5aa58ea9e945cd421152573`.

### evaluation:541708

Calls written directly in this body: `finishedSignature`, `isGmailRoute`, `sendAsSignature`, `sentMessageSignature`.

SHA-256 of the source span: `5200e5d045c7b465a2affa2bcf315e8ca191d0cac5aa58ea9e945cd421152573`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
