# `readActivationGap`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737810-737812](../../../../../../../reference/runtime/host-main.cjs#L737810-L737812) | `FunctionDeclaration` | no | `db, shippedThroughId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737810-737812](../../../../../../../reference/runtime/host-main.cjs#L737810-L737812) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:737810

Calls written directly in this body: `db.getTranscriptEntries`, `db.getTranscriptEntriesAfter`.

SHA-256 of the source span: `756326253d3ec7674486ec658a69f7eabae56592ce0947f3f3cc19063ce8aa4b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
