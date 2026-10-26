# `tracePartOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/transcript-trace.ts` · [Module README](../../../../../modules/core/runner/transcript-trace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765678-765710](../../../../../../reference/runtime/host-main.cjs#L765678-L765710) | `FunctionDeclaration` | no | `part, role` |
| [evaluation:559043-559075](../../../../../../reference/runtime/sand-eval-runner.cjs#L559043-L559075) | `FunctionDeclaration` | no | `part, role` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765678-765710](../../../../../../reference/runtime/host-main.cjs#L765678-L765710) | 12 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:559043-559075](../../../../../../reference/runtime/sand-eval-runner.cjs#L559043-L559075) | 12 | 0 | 0 | 6 | 0 | 0 |

### host:765678

Calls written directly in this body: `boundedPayload`, `boundedText`, `part.text.trim`, `userTextOf`.

SHA-256 of the source span: `15e35cf34229fb815076c36e554c7ef4973ee64030b32a2f6a66da83e3b6aa1a`.

### evaluation:559043

Calls written directly in this body: `boundedPayload`, `boundedText`, `part.text.trim`, `userTextOf`.

SHA-256 of the source span: `15e35cf34229fb815076c36e554c7ef4973ee64030b32a2f6a66da83e3b6aa1a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
