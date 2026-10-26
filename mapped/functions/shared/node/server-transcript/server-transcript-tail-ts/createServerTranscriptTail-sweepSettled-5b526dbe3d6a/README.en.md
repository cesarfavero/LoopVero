# `createServerTranscriptTail/sweepSettled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713753-713772](../../../../../../../reference/runtime/host-main.cjs#L713753-L713772) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713753-713772](../../../../../../../reference/runtime/host-main.cjs#L713753-L713772) | 2 | 2 | 0 | 1 | 0 | 0 |

### host:713753

Calls written directly in this body: `.sort`, `Math.max`, `agents.delete`, `agents.values`, `byRecency3.entries`, `clock.monotonicNow`, `deps.log`, `isSettled`, `tailStateKey`.

Assignment or increment targets: `epochBumpFloor`, `evicted`, `releasedRows`, `retainedRows`.

SHA-256 of the source span: `02f163e8be04b64c90cbf5682873c9e43288a843e805923386196a96c8dde9f2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
