# `loadInitialTranscriptResiliently`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/host-initial-transcript-load.ts` · [Module README](../../../../modules/host/host-initial-transcript-load-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786284-786295](../../../../../reference/runtime/host-main.cjs#L786284-L786295) | `FunctionDeclaration` | yes | `transcript, reportHostLog` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786284-786295](../../../../../reference/runtime/host-main.cjs#L786284-L786295) | 1 | 0 | 1 | 2 | 1 | 1 |

### host:786284

Calls written directly in this body: `errorLogTag`, `isSqliteBusyError`, `reportHostLog`, `retrySqliteBusy`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `87d8cc7fd3335645fbccdb4b0b2a4e39043fc14bd73f918e770860159a2d9dfd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
