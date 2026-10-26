# `sentMessageSignature`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755820-755832](../../../../../../../../reference/runtime/host-main.cjs#L755820-L755832) | `FunctionDeclaration` | yes | `execute, route, sendingAddress` |
| [evaluation:541695-541707](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541695-L541707) | `FunctionDeclaration` | yes | `execute, route, sendingAddress` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755820-755832](../../../../../../../../reference/runtime/host-main.cjs#L755820-L755832) | 6 | 0 | 2 | 4 | 0 | 0 |
| [evaluation:541695-541707](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541695-L541707) | 6 | 0 | 2 | 4 | 0 | 0 |

### host:755820

Calls written directly in this body: `execute`, `namesSigner`, `reads.firstId`, `reads.read`, `reads.sentMessage`, `signatureBlock`, `signatureReads`, `signerNameParts`.

SHA-256 of the source span: `eff769c9662ea134c87de7fa5977549acc9ec14f8948470406b9b614ed7252e5`.

### evaluation:541695

Calls written directly in this body: `execute`, `namesSigner`, `reads.firstId`, `reads.read`, `reads.sentMessage`, `signatureBlock`, `signatureReads`, `signerNameParts`.

SHA-256 of the source span: `eff769c9662ea134c87de7fa5977549acc9ec14f8948470406b9b614ed7252e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
