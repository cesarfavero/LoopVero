# `groupHistoryFromTranscriptEntries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-history.ts` · [Module README](../../../../../modules/core/groups/group-history-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737645-737679](../../../../../../reference/runtime/host-main.cjs#L737645-L737679) | `FunctionDeclaration` | no | `entries, seqOf` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737645-737679](../../../../../../reference/runtime/host-main.cjs#L737645-L737679) | 6 | 1 | 0 | 1 | 0 | 0 |

### host:737645

Calls written directly in this body: `Number`, `entries.map`, `entry.content.trim`, `groupPostText`, `groupReplyTarget`, `messages2.push`, `new Map`, `seqOf`.

SHA-256 of the source span: `ea380a3689042f9b3d53f1e4abccacf235dd086f2ebb6c2203f7c4325617630c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
