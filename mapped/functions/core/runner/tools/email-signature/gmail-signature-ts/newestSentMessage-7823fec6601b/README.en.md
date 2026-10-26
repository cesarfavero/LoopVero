# `newestSentMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755637-755643](../../../../../../../../reference/runtime/host-main.cjs#L755637-L755643) | `FunctionDeclaration` | no | `{   threadText,   sendingAddress }` |
| [evaluation:541512-541518](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541512-L541518) | `FunctionDeclaration` | no | `{   threadText,   sendingAddress }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755637-755643](../../../../../../../../reference/runtime/host-main.cjs#L755637-L755643) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541512-541518](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541512-L541518) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755637

Calls written directly in this body: `.findLast`, `.map`, `listOf`, `parseDraftConnectorRecord`, `sendingAddress.toLowerCase`.

SHA-256 of the source span: `bd7b0c73cfae14535d4188caf76a2bf6570978a76d05701894272f3bf2f270a0`.

### evaluation:541512

Calls written directly in this body: `.findLast`, `.map`, `listOf`, `parseDraftConnectorRecord`, `sendingAddress.toLowerCase`.

SHA-256 of the source span: `bd7b0c73cfae14535d4188caf76a2bf6570978a76d05701894272f3bf2f270a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
