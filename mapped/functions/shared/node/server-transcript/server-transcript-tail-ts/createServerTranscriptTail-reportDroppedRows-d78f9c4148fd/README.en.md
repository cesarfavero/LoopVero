# `createServerTranscriptTail/reportDroppedRows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713191-713195](../../../../../../../reference/runtime/host-main.cjs#L713191-L713195) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713191-713195](../../../../../../../reference/runtime/host-main.cjs#L713191-L713195) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:713191

Calls written directly in this body: `deps.log`.

Assignment or increment targets: `droppedRows`.

SHA-256 of the source span: `f5a001b710b4c1ce82307418648cb8a4651302035ca3a878ffb398d7b752c770`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
