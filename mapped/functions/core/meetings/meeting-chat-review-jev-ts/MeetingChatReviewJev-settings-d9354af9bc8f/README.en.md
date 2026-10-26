# `_MeetingChatReviewJev.settings`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/meetings/meeting-chat-review-jev.ts` · [Module README](../../../../../modules/core/meetings/meeting-chat-review-jev-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760213-760230](../../../../../../reference/runtime/host-main.cjs#L760213-L760230) | `method` | no | `raw` |
| [evaluation:551028-551045](../../../../../../reference/runtime/sand-eval-runner.cjs#L551028-L551045) | `method` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760213-760230](../../../../../../reference/runtime/host-main.cjs#L760213-L760230) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551028-551045](../../../../../../reference/runtime/sand-eval-runner.cjs#L551028-L551045) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:760213

Calls written directly in this body: `Math.floor`, `pick2`.

SHA-256 of the source span: `19134ac5b0bd2aed0e216999bee21305f85ea1606d831a8b0db1ab45ebbaf82d`.

### evaluation:551028

Calls written directly in this body: `Math.floor`, `pick2`.

SHA-256 of the source span: `19134ac5b0bd2aed0e216999bee21305f85ea1606d831a8b0db1ab45ebbaf82d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
