# `GroupChatGlue.activeTemporalMemberIdOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/group-chat-glue.ts` · [Module README](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738709-738711](../../../../../../../reference/runtime/host-main.cjs#L738709-L738711) | `method` | no | `groupId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738709-738711](../../../../../../../reference/runtime/host-main.cjs#L738709-L738711) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:738709

Calls written directly in this body: `.at`, `this.workingTemporalMembersByGroup.get`.

SHA-256 of the source span: `6ac8be85aa1210240f28d66ca0462a80af908a4dcf16a710b1ff0924e03c3532`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
