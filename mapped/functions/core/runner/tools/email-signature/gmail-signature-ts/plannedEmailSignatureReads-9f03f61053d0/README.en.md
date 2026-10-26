# `plannedEmailSignatureReads`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755612-755617](../../../../../../../../reference/runtime/host-main.cjs#L755612-L755617) | `FunctionDeclaration` | no | `route, hostedSendAs = false` |
| [evaluation:541487-541492](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541487-L541492) | `FunctionDeclaration` | no | `route, hostedSendAs = false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755612-755617](../../../../../../../../reference/runtime/host-main.cjs#L755612-L755617) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:541487-541492](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541487-L541492) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:755612

Calls written directly in this body: `signatureReads`.

SHA-256 of the source span: `c27406ac14ee2477bcf6eb06e717d01c6c0aea68bd28145c517b32d817e66c5c`.

### evaluation:541487

Calls written directly in this body: `signatureReads`.

SHA-256 of the source span: `c27406ac14ee2477bcf6eb06e717d01c6c0aea68bd28145c517b32d817e66c5c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
