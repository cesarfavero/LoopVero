# `TranscriptEntryPublisher.redirtyUnlessClearSuperseded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784083-784092](../../../../../../../reference/runtime/host-main.cjs#L784083-L784092) | `method` | no | `agentId, state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784083-784092](../../../../../../../reference/runtime/host-main.cjs#L784083-L784092) | 1 | 2 | 0 | 0 | 0 | 0 |

### host:784083

Calls written directly in this body: `retry2.deletedSeqs.set`, `retry2.entryIds.add`, `this.dirtyFor`.

Assignment or increment targets: `retry2.backfill`, `retry2.cleared`, `retry2.resweep`.

SHA-256 of the source span: `b2f30331f105e335c6091997d395b20a936fd5e69a555c6e8a27890e13b16d5f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
