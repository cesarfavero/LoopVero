# `mergeSegmentMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/evals/turn-transcript.ts` · [Module README](../../../../../modules/core/evals/turn-transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628495-628517](../../../../../../reference/runtime/sand-eval-runner.cjs#L628495-L628517) | `FunctionDeclaration` | no | `batches` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628495-628517](../../../../../../reference/runtime/sand-eval-runner.cjs#L628495-L628517) | 4 | 2 | 0 | 1 | 0 | 0 |

### evaluation:628495

Calls written directly in this body: `JSON.stringify`, `ids.every`, `isUnknownRecord2`, `merged.map`, `merged.push`, `mergedIds.every`, `new Set`, `seenMessages.add`, `seenMessages.has`, `toolCallIds2`, `toolCallIdsOf2`.

Assignment or increment targets: `merged`.

SHA-256 of the source span: `8e821ab9d4f58509e5efeb8ee7a1c101fa930056d9723cdd58aeb128497a351d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
