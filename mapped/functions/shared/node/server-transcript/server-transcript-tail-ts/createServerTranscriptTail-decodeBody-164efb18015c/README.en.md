# `createServerTranscriptTail/decodeBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713171-713190](../../../../../../../reference/runtime/host-main.cjs#L713171-L713190) | `ArrowFunctionExpression` | no | `body, seq2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713171-713190](../../../../../../../reference/runtime/host-main.cjs#L713171-L713190) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:713171

Calls written directly in this body: `JSON.parse`, `Number`, `decoder3.decode`, `deps.log`, `errorLogTag`, `transcriptEntryOfJson`.

Assignment or increment targets: `droppedRows`, `parsed2`.

SHA-256 of the source span: `0fd44e3c548e93a17073a97af35655e863896d5bc60405ebe115a041c9857a0e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
