# `_SandVoiceCallReceipt.prompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/receipt.ts` · [Module README](../../../../../modules/shared/voice-call/receipt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714458-714469](../../../../../../reference/runtime/host-main.cjs#L714458-L714469) | `method` | no | `record3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714458-714469](../../../../../../reference/runtime/host-main.cjs#L714458-L714469) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:714458

Calls written directly in this body: `.map`, `JSON.stringify`, `_SandVoiceCallReceipt.hasNothingToSummarize`, `record3.nudges.flatMap`, `record3.turns.filter`.

SHA-256 of the source span: `ce33d106ddf45cdcc1b29e665fa537a85003f119991e3eb41abc29f210cb9e8b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
