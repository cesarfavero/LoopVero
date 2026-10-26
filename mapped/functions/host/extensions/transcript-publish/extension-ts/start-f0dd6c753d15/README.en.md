# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/extension.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784295-784375](../../../../../../../reference/runtime/host-main.cjs#L784295-L784375) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784295-784375](../../../../../../../reference/runtime/host-main.cjs#L784295-L784375) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:784295

Calls written directly in this body: `.then`, `context2.onStop`, `createPublishSoon`, `createSandCursorBackendClient`, `getSandAgentsRootDir`, `getSandRootDir`, `new TranscriptEntryPublisher`, `publisher.sweepAllAgents`, `subscribeTranscriptMutations`.

SHA-256 of the source span: `0b579d869f655330c3bb446a72084f96203bdf537fa145fa9b4d191cf5f9fb83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
