# `GroupChatGlue.localGroupConfig`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/group-chat-glue.ts` · [Module README](../../../../../../modules/host/extensions/transcript/group-chat-glue-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738506-738510](../../../../../../../reference/runtime/host-main.cjs#L738506-L738510) | `method` | no | `dir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738506-738510](../../../../../../../reference/runtime/host-main.cjs#L738506-L738510) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:738506

Calls written directly in this body: `getSandProfilePath`, `readSandGroupConfig`, `readSandProfileHarness`.

SHA-256 of the source span: `e3a00ba1f45484f43b2b0af87a8b809dbbad14b27ec24e8757b2815b27a6afa8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
