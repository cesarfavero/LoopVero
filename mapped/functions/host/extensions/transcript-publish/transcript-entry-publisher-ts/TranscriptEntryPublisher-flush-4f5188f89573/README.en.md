# `TranscriptEntryPublisher.flush`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783916-783925](../../../../../../../reference/runtime/host-main.cjs#L783916-L783925) | `method` | no | `scope = "all"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783916-783925](../../../../../../../reference/runtime/host-main.cjs#L783916-L783925) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:783916

Calls written directly in this body: `.catch`, `this.lane.then`.

Assignment or increment targets: `this.lane`.

SHA-256 of the source span: `17ba2a6ab0e33f092c022eee15da6ae39b65aa15dec68a44d858e6721c5e9382`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
