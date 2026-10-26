# `sandTurnTranscripts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/evals/turn-transcript.ts` · [Module README](../../../../../modules/core/evals/turn-transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628360-628393](../../../../../../reference/runtime/sand-eval-runner.cjs#L628360-L628393) | `FunctionDeclaration` | no | `segments` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628360-628393](../../../../../../reference/runtime/sand-eval-runner.cjs#L628360-L628393) | 4 | 1 | 0 | 1 | 0 | 0 |

### evaluation:628360

Calls written directly in this body: `.map`, `byRequestId.get`, `byRequestId.set`, `existing.push`, `groups.map`, `groups.push`, `mergeSegmentMessages`, `new Map`, `new Set`, `segments.filter`, `subagentLaunches`.

SHA-256 of the source span: `10a3cec915fcad8e641f9b076ce4ca2da15e34034f31f92a73281b0cdfde82eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
