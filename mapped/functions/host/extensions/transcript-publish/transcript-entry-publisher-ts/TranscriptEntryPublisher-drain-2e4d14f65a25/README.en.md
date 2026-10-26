# `TranscriptEntryPublisher.drain`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783997-784037](../../../../../../../reference/runtime/host-main.cjs#L783997-L784037) | `method` | yes | `scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783997-784037](../../../../../../../reference/runtime/host-main.cjs#L783997-L784037) | 3 | 2 | 1 | 0 | 0 | 1 |

### host:783997

Calls written directly in this body: `.sort`, `batch.delete`, `batch.set`, `brandedErrorTag`, `brandedOrInvalidId`, `errorLogTag`, `isInteractiveDirty`, `logFields`, `new Map`, `this.dirty.set`, `this.dirtyFor`, `this.publishAgent`, `this.report`, `triggerOf`.

Assignment or increment targets: `deferred.backfill`, `deferred.resweep`, `this.dirty`.

SHA-256 of the source span: `a96276a21acf9d831ff0639174b96334e9166b125cec5fb47ebfd774e36fbe50`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
