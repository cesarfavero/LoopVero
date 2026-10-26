# `TranscriptEntryPublisher.sendCommit/reissue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784271-784274](../../../../../../../reference/runtime/host-main.cjs#L784271-L784274) | `ArrowFunctionExpression` | no | `seq2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784271-784274](../../../../../../../reference/runtime/host-main.cjs#L784271-L784274) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:784271

Calls written directly in this body: `Math.max`.

Assignment or increment targets: `writerSeq`.

SHA-256 of the source span: `d956fb2a2b1f5bdd5dfb899885c201ee945ce0d114dac7bc1e4b6926aff72c68`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
