# `SandVoiceCallReceiptUndeliverableError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/receipt-undeliverable.ts` · [Module README](../../../../../modules/shared/voice-call/receipt-undeliverable-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490410-490413](../../../../../../reference/runtime/host-main.cjs#L490410-L490413) | `method` | no | `message, reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490410-490413](../../../../../../reference/runtime/host-main.cjs#L490410-L490413) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:490410

Calls written directly in this body: `super`.

Assignment or increment targets: `this.reason`.

SHA-256 of the source span: `8fe6e4c261491b216a6d6553a374b3a21c52d30aa69788fd7c46b1ac801a1905`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
