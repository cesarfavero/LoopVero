# `getChatTranscriptEntries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/transcript.ts` · [Module README](../../../../../modules/shared/transcript/transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485206-485209](../../../../../../reference/runtime/host-main.cjs#L485206-L485209) | `FunctionDeclaration` | no | `entries` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485206-485209](../../../../../../reference/runtime/host-main.cjs#L485206-L485209) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:485206

Calls written directly in this body: `entries.filter`, `entries.some`.

SHA-256 of the source span: `757b1939dcc9224a88e5377930fffab6ac805f1c021855f5cfd416bb6ce701ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
