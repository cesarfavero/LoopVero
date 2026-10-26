# `isSentFrom`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755625-755629](../../../../../../../../reference/runtime/host-main.cjs#L755625-L755629) | `FunctionDeclaration` | no | `message, address` |
| [evaluation:541500-541504](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541500-L541504) | `FunctionDeclaration` | no | `message, address` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755625-755629](../../../../../../../../reference/runtime/host-main.cjs#L755625-L755629) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:541500-541504](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541500-L541504) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:755625

Calls written directly in this body: `Array.isArray`, `message.labelIds.includes`, `message.sender.toLowerCase`, `sender.endsWith`.

SHA-256 of the source span: `2744a7a5850e0d86122757ea62bfdcd95ca3b6c3c9efa56330accf5149e95bd4`.

### evaluation:541500

Calls written directly in this body: `Array.isArray`, `message.labelIds.includes`, `message.sender.toLowerCase`, `sender.endsWith`.

SHA-256 of the source span: `2744a7a5850e0d86122757ea62bfdcd95ca3b6c3c9efa56330accf5149e95bd4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
