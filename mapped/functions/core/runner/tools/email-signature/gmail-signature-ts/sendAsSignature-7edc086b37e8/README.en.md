# `sendAsSignature`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755811-755819](../../../../../../../../reference/runtime/host-main.cjs#L755811-L755819) | `FunctionDeclaration` | yes | `execute, route, sendingAddress` |
| [evaluation:541686-541694](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541686-L541694) | `FunctionDeclaration` | yes | `execute, route, sendingAddress` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755811-755819](../../../../../../../../reference/runtime/host-main.cjs#L755811-L755819) | 2 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:541686-541694](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541686-L541694) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:755811

Calls written directly in this body: `execute`, `parseDraftConnectorRecord`, `restSendAsSchema.safeParse`, `sendAsSignatureOf`.

SHA-256 of the source span: `ec7815648c0403cf2e86a9cac75bfba31fcf082d4fdc0007587500cea881f5b2`.

### evaluation:541686

Calls written directly in this body: `execute`, `parseDraftConnectorRecord`, `restSendAsSchema.safeParse`, `sendAsSignatureOf`.

SHA-256 of the source span: `741c8928ab4b935be3f2f62ad39659ce83564687000f3f10f6a48bf762cb7a83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
