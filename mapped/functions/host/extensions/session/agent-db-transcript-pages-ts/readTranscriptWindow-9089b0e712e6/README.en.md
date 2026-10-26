# `readTranscriptWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/session/agent-db-transcript-pages.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-transcript-pages-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718121-718139](../../../../../../../reference/runtime/host-main.cjs#L718121-L718139) | `FunctionDeclaration` | no | `statements, query2, threadCountsFor` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718121-718139](../../../../../../../reference/runtime/host-main.cjs#L718121-L718139) | 5 | 1 | 0 | 1 | 0 | 0 |

### host:718121

Calls written directly in this body: `Math.min`, `Number.isFinite`, `Number.isInteger`, `entries.push`, `parseTranscriptEntry`, `rows.slice`, `selected.at`, `selected.toReversed`, `statements.listTranscriptWindow.all`, `threadCountsFor`.

SHA-256 of the source span: `b2f0750620368b0e455e3d82957842d6ee5a929bcf593455d3ded41a66c14e9d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
