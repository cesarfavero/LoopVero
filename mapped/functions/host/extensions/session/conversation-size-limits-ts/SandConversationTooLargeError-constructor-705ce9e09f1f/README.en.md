# `SandConversationTooLargeError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/conversation-size-limits.ts` · [Module README](../../../../../../modules/host/extensions/session/conversation-size-limits-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719361-719365](../../../../../../../reference/runtime/host-main.cjs#L719361-L719365) | `method` | no | `sizeBytes, limitBytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719361-719365](../../../../../../../reference/runtime/host-main.cjs#L719361-L719365) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:719361

Calls written directly in this body: `Math.round`, `super`.

SHA-256 of the source span: `2141c6862fdd1f1c98c84e63994ca9e8b95bc4360d6785dc3daac24afc467497`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
