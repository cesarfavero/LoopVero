# `_MeetingChatReviewJev.decide`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-review-jev.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-review-jev-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760234-760261](../../../../../../reference/runtime/host-main.cjs#L760234-L760261) | `method` | no | `input2` |
| [evaluation:551049-551076](../../../../../../reference/runtime/sand-eval-runner.cjs#L551049-L551076) | `method` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760234-760261](../../../../../../reference/runtime/host-main.cjs#L760234-L760261) | 6 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:551049-551076](../../../../../../reference/runtime/sand-eval-runner.cjs#L551049-L551076) | 6 | 0 | 0 | 2 | 0 | 0 |

### host:760234

Calls written directly in this body: `.trim`, `_MeetingChatReviewJev.route`, `alwaysOn.flatMap`, `atLeast`, `atMost`, `failed2.push`.

SHA-256 of the source span: `03b8b1556661579413b9f265b63cbc95ae31f0944d29f084aa426f2216004e29`.

### evaluation:551049

Calls written directly in this body: `.trim`, `_MeetingChatReviewJev.route`, `alwaysOn.flatMap`, `atLeast`, `atMost`, `failed.push`.

SHA-256 of the source span: `e7ab6dbdc916e707850f9af5d4bcd81d0bf9a303c70f162190d085edb99c7bad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
