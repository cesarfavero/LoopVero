# `parseLedger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/transcript-entry-publisher.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/transcript-entry-publisher-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783833-783860](../../../../../../../reference/runtime/host-main.cjs#L783833-L783860) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783833-783860](../../../../../../../reference/runtime/host-main.cjs#L783833-L783860) | 8 | 0 | 0 | 9 | 0 | 0 |

### host:783833

Calls written directly in this body: `attemptSync`, `isCounter`, `isUnknownRecord2`, `new TranscriptLedgerCorruptError`.

SHA-256 of the source span: `492f8c26bfc1378b0a1dc8441d91db97f1342ca9d1e40f36a521b3642e3444bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
