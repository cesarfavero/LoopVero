# `TranscriptEntryPublisher.saveLedger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784104-784107](../../../../../../../reference/runtime/host-main.cjs#L784104-L784107) | `method` | yes | `agentId, ledger` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784104-784107](../../../../../../../reference/runtime/host-main.cjs#L784104-L784107) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:784104

Calls written directly in this body: `JSON.stringify`, `this.ledgerPath`, `this.ledgers.set`, `writeSandDataFile`.

SHA-256 of the source span: `a191c434ea6b40d22e8057a4d1d2b2fbf3a9c97e5cd7813d99fe380964d1dbbc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
