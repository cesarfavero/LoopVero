# `TranscriptEntryPublisher.flushAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783926-783941](../../../../../../../reference/runtime/host-main.cjs#L783926-L783941) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783926-783941](../../../../../../../reference/runtime/host-main.cjs#L783926-L783941) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:783926

Calls written directly in this body: `.catch`, `this.dirty.has`, `this.dirtyFor`, `this.lane.then`.

Assignment or increment targets: `.backfill`, `this.lane`.

SHA-256 of the source span: `7f85f76f8d934cca6af94eec7bfd24c60da7410013fc13e625f81745668410d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
