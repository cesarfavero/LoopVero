# `_SandVoiceCallReceipt.parse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/voice-call/receipt.ts` · [Module README](../../../../../modules/shared/voice-call/receipt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714470-714477](../../../../../../reference/runtime/host-main.cjs#L714470-L714477) | `method` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714470-714477](../../../../../../reference/runtime/host-main.cjs#L714470-L714477) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:714470

Calls written directly in this body: `.find`, `.map`, `.replace`, `.trim`, `_SandVoiceCallReceipt.isScannableDescription`, `clampLine2`, `firstLine.replace`, `raw.split`.

SHA-256 of the source span: `a94b04ddd2c24a01b3cafb9a91d8d95b98cdbc9bd75e58b34dabb9314ed6a5a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
