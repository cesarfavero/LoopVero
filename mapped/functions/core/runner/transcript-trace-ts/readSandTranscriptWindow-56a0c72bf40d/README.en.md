# `readSandTranscriptWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/transcript-trace.ts` · [Module README](../../../../../modules/core/runner/transcript-trace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765773-765812](../../../../../../reference/runtime/host-main.cjs#L765773-L765812) | `FunctionDeclaration` | yes | `args` |
| [evaluation:559138-559177](../../../../../../reference/runtime/sand-eval-runner.cjs#L559138-L559177) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765773-765812](../../../../../../reference/runtime/host-main.cjs#L765773-L765812) | 4 | 2 | 2 | 2 | 0 | 0 |
| [evaluation:559138-559177](../../../../../../reference/runtime/sand-eval-runner.cjs#L559138-L559177) | 4 | 2 | 2 | 2 | 0 | 0 |

### host:765773

Calls written directly in this body: `Math.max`, `Math.min`, `asyncMapValues`, `clampSandTranscriptMessageLimit`, `ids.slice`, `lines2.unshift`, `listMessageBlobIds`.

Assignment or increment targets: `bytes`, `firstIndex`, `index`, `reachedByteCap`.

SHA-256 of the source span: `7d5b5b0af1dc6f62ff2d88403e1e62efb9886c4b9358ca3b434d294d4fe4e041`.

### evaluation:559138

Calls written directly in this body: `Math.max`, `Math.min`, `asyncMapValues`, `clampSandTranscriptMessageLimit`, `ids.slice`, `lines2.unshift`, `listMessageBlobIds`.

Assignment or increment targets: `bytes`, `firstIndex`, `index`, `reachedByteCap`.

SHA-256 of the source span: `7d5b5b0af1dc6f62ff2d88403e1e62efb9886c4b9358ca3b434d294d4fe4e041`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
