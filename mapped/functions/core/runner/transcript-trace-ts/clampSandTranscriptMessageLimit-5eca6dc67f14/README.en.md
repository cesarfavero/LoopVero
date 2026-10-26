# `clampSandTranscriptMessageLimit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/transcript-trace.ts` · [Module README](../../../../../modules/core/runner/transcript-trace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765769-765772](../../../../../../reference/runtime/host-main.cjs#L765769-L765772) | `FunctionDeclaration` | no | `limit3` |
| [evaluation:559134-559137](../../../../../../reference/runtime/sand-eval-runner.cjs#L559134-L559137) | `FunctionDeclaration` | no | `limit3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765769-765772](../../../../../../reference/runtime/host-main.cjs#L765769-L765772) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559134-559137](../../../../../../reference/runtime/sand-eval-runner.cjs#L559134-L559137) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:765769

Calls written directly in this body: `Math.floor`, `Math.min`, `Number.isFinite`.

SHA-256 of the source span: `3c6c9bbeac356951decaefd793931e872d1de212acdf094e9a1b206087447f35`.

### evaluation:559134

Calls written directly in this body: `Math.floor`, `Math.min`, `Number.isFinite`.

SHA-256 of the source span: `3c6c9bbeac356951decaefd793931e872d1de212acdf094e9a1b206087447f35`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
