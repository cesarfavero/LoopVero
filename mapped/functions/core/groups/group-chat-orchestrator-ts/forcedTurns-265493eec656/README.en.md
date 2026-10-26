# `forcedTurns`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat-orchestrator.ts` · [Module README](../../../../../modules/core/groups/group-chat-orchestrator-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737562-737583](../../../../../../reference/runtime/host-main.cjs#L737562-L737583) | `FunctionDeclaration` | no | `members2, isAttachmentOnlyTurn, receipts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737562-737583](../../../../../../reference/runtime/host-main.cjs#L737562-L737583) | 2 | 2 | 0 | 1 | 0 | 0 |

### host:737562

Calls written directly in this body: `forced.set`, `members2.some`, `mergeForced`, `new Map`.

Assignment or increment targets: `forced`.

SHA-256 of the source span: `cb943ee801e8dfd215ba2833d27f6f96a7683323d7375279138d4b0219f31372`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
