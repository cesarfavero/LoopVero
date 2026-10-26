# `TranscriptEntryPublisher.publishAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784044-784082](../../../../../../../reference/runtime/host-main.cjs#L784044-L784082) | `method` | yes | `agentId, state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784044-784082](../../../../../../../reference/runtime/host-main.cjs#L784044-L784082) | 4 | 0 | 1 | 4 | 0 | 1 |

### host:784044

Calls written directly in this body: `Math.round`, `brandedErrorTag`, `brandedOrInvalidId`, `errorLogTag`, `logFields`, `performance.now`, `removeSandDataFileSync`, `this.deps.isTemporalAgent`, `this.ledgerPath`, `this.ledgers.delete`, `this.publishAgentInner`, `this.redirtyUnlessClearSuperseded`, `this.report`, `triggerOf`.

Assignment or increment targets: `outcome`.

SHA-256 of the source span: `62f08a4cc99b20ccf3dd30d820978fc1d6fe4c15ea96b74d2a21f901558f2cf0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
