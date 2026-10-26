# `TranscriptEntryPublisher.applyMutation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783888-783915](../../../../../../../reference/runtime/host-main.cjs#L783888-L783915) | `method` | no | `mutation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783888-783915](../../../../../../../reference/runtime/host-main.cjs#L783888-L783915) | 6 | 1 | 0 | 5 | 0 | 0 |

### host:783888

Calls written directly in this body: `.deletedSeqs.set`, `state.deletedSeqs.clear`, `state.entryIds.add`, `state.entryIds.clear`, `this.dirtyFor`, `this.ledgers.delete`.

Assignment or increment targets: `.removed`, `.resweep`, `state.cleared`.

SHA-256 of the source span: `57bb1ca279af94376ec71745971064733562fa54d94612d4bb066a3f6d5aa4d0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
