# `TranscriptEntryPublisher.sendCommit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784262-784287](../../../../../../../reference/runtime/host-main.cjs#L784262-L784287) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784262-784287](../../../../../../../reference/runtime/host-main.cjs#L784262-L784287) | 2 | 1 | 2 | 2 | 1 | 0 |

### host:784262

Calls written directly in this body: `.map`, `Math.max`, `deletes.filter`, `entries.filter`, `new Set`, `new TranscriptEntryCommitRejectedError`, `result.rejections.map`, `this.deps.commit`.

Assignment or increment targets: `writerSeq`.

Explicit throw targets: `TranscriptEntryCommitRejectedError`.

SHA-256 of the source span: `c39744b8b86ab203f9eacbe2625d5412db2e996bce7797efdec5753c72e4f3f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
