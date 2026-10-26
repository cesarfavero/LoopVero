# `renderTranscriptSearch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/transcript-search/transcript-search-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/transcript-search/transcript-search-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771356-771376](../../../../../../../../reference/runtime/host-main.cjs#L771356-L771376) | `FunctionDeclaration` | no | `args` |
| [evaluation:570590-570610](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570590-L570610) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771356-771376](../../../../../../../../reference/runtime/host-main.cjs#L771356-L771376) | 4 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:570590-570610](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570590-L570610) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:771356

Calls written directly in this body: `String`, `clip`, `lines2.join`, `lines2.push`.

Assignment or increment targets: `budget`, `shown`.

SHA-256 of the source span: `8cae24729bfc7ea985b8002377a6470701a0389c77b7ae33e79beac1cc82ed9d`.

### evaluation:570590

Calls written directly in this body: `String`, `clip`, `lines2.join`, `lines2.push`.

Assignment or increment targets: `budget`, `shown`.

SHA-256 of the source span: `8cae24729bfc7ea985b8002377a6470701a0389c77b7ae33e79beac1cc82ed9d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
