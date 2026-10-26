# `sweepStrandedDraftSends`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/draft-send-sweep.ts` · [Module README](../../../../../../modules/host/extensions/session/draft-send-sweep-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719455-719466](../../../../../../../reference/runtime/host-main.cjs#L719455-L719466) | `FunctionDeclaration` | no | `db, isInFlight` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719455-719466](../../../../../../../reference/runtime/host-main.cjs#L719455-L719466) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:719455

Calls written directly in this body: `db.getTranscriptEntries`, `db.updateTranscriptEntry`, `isInFlight`, `settleSendingDraftEntry`, `settledEntries.push`.

SHA-256 of the source span: `663aa4b00242e067af798eb47a1959cfae1c295b83cb0ead7a9b4c38f8ea90c6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
