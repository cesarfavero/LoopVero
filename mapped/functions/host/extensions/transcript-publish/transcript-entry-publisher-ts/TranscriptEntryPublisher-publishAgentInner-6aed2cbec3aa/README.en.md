# `TranscriptEntryPublisher.publishAgentInner`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784108-784261](../../../../../../../reference/runtime/host-main.cjs#L784108-L784261) | `method` | yes | `agentId, state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784108-784261](../../../../../../../reference/runtime/host-main.cjs#L784108-L784261) | 15 | 6 | 7 | 3 | 0 | 0 |

### host:784108

Calls written directly in this body: `.filter`, `.get`, `.map`, `.sort`, `Buffer.from`, `Math.floor`, `Math.max`, `Math.min`, `batch.push`, `byIdStatement.get`, `checkSandDataDatabaseSync`, `collect`, `createProcessKeepAlive`, `db.close`, `db.exec`, `db.prepare`, `deletedSeqs.slice`, `elapsedMs`, `new Map`, `new import_node_sqlite6.DatabaseSync`, `page.at`, `pageStatement.all`, `readHold.dispose`, `refuseSandDataDatabaseLinksSync`, `rows.values`, `sha256Hex`, `state.deletedSeqs.has`, `state.deletedSeqs.set`, `this.clock.monotonicNow`, `this.deps.putBlob`, `this.loadLedger`, `this.readBoundary.settled`, `this.saveLedger`, `this.sendCommit`.

Assignment or increment targets: `afterSeq`, `batchBytes`, `committedCount`, `deletedCount`, `ledger`, `maxSeq`, `minRow`, `pageChars`, `pageRows`, `readHold`, `resweep`, `sliceStartedAt`, `start`, `state.cleared`, `state.resweep`, `writerSeq`.

SHA-256 of the source span: `b42967aae0d4db4dc1a897722c204bc77baaa52f2bd03592018ebd26cc091a2e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
