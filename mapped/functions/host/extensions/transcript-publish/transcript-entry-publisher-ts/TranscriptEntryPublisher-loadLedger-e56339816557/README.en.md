# `TranscriptEntryPublisher.loadLedger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784093-784103](../../../../../../../reference/runtime/host-main.cjs#L784093-L784103) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784093-784103](../../../../../../../reference/runtime/host-main.cjs#L784093-L784103) | 3 | 0 | 0 | 3 | 1 | 0 |

### host:784093

Calls written directly in this body: `parseLedger`, `readSandDataFileIfPresentSync`, `this.ledgerPath`, `this.ledgers.get`.

Explicit throw targets: `ledger`.

SHA-256 of the source span: `51108f1493932f61cfa7ddfe1af795d1be801e3380be5e688660eb45f64ca1da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
