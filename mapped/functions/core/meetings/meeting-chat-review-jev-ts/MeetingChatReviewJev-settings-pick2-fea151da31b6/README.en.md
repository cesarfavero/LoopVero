# `_MeetingChatReviewJev.settings/pick2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-review-jev.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-review-jev-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760214-760218](../../../../../../reference/runtime/host-main.cjs#L760214-L760218) | `ArrowFunctionExpression` | no | `key` |
| [evaluation:551029-551033](../../../../../../reference/runtime/sand-eval-runner.cjs#L551029-L551033) | `ArrowFunctionExpression` | no | `key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760214-760218](../../../../../../reference/runtime/host-main.cjs#L760214-L760218) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551029-551033](../../../../../../reference/runtime/sand-eval-runner.cjs#L551029-L551033) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:760214

Calls written directly in this body: `Math.max`, `Math.min`, `Number.isFinite`.

SHA-256 of the source span: `33eb4bffe098cc06c400f9a2934019b2a0bb2500aee97bec8e2c89c0f7c12e94`.

### evaluation:551029

Calls written directly in this body: `Math.max`, `Math.min`, `Number.isFinite`.

SHA-256 of the source span: `33eb4bffe098cc06c400f9a2934019b2a0bb2500aee97bec8e2c89c0f7c12e94`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
