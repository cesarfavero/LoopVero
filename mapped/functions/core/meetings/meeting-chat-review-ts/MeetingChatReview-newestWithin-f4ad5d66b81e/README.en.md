# `_MeetingChatReview.newestWithin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-review.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760123-760135](../../../../../../reference/runtime/host-main.cjs#L760123-L760135) | `method` | no | `items, maxChars, lengthOf` |
| [evaluation:550938-550950](../../../../../../reference/runtime/sand-eval-runner.cjs#L550938-L550950) | `method` | no | `items, maxChars, lengthOf` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760123-760135](../../../../../../reference/runtime/host-main.cjs#L760123-L760135) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:550938-550950](../../../../../../reference/runtime/sand-eval-runner.cjs#L550938-L550950) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:760123

Calls written directly in this body: `kept.unshift`, `lengthOf`.

Assignment or increment targets: `index`, `used`.

SHA-256 of the source span: `f0d4b8615caa52d2913bc9c0d51650137f5ee4fd8a51aa02bf19e70618bdc70f`.

### evaluation:550938

Calls written directly in this body: `kept.unshift`, `lengthOf`.

Assignment or increment targets: `index`, `used`.

SHA-256 of the source span: `f0d4b8615caa52d2913bc9c0d51650137f5ee4fd8a51aa02bf19e70618bdc70f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
