# `fetchBlobFromUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-client.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:712369-712378](../../../../../../../reference/runtime/host-main.cjs#L712369-L712378) | `FunctionDeclaration` | yes | `url2, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712369-712378](../../../../../../../reference/runtime/host-main.cjs#L712369-L712378) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:712369

Calls written directly in this body: `blobReadDeadline.run`.

SHA-256 of the source span: `02e0a0ad593b0d69b14289cb5fd04c5d977d5032a0b9094401dee807a2a33dd6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
