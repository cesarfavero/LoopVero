# `TracedComputerUseSpan.endAtAbort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [Module README](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742996-742998](../../../../../../../../reference/runtime/host-main.cjs#L742996-L742998) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:515847-515849](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515847-L515849) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742996-742998](../../../../../../../../reference/runtime/host-main.cjs#L742996-L742998) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515847-515849](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515847-L515849) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:742996

Calls written directly in this body: `computerUseSpanOutcomeOf`, `this.end`.

SHA-256 of the source span: `0f7c5699e8054ecc5f207f7f7479974e3f101b5d2aa464a917e52914a9fc2b08`.

### evaluation:515847

Calls written directly in this body: `computerUseSpanOutcomeOf`, `this.end`.

SHA-256 of the source span: `0f7c5699e8054ecc5f207f7f7479974e3f101b5d2aa464a917e52914a9fc2b08`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
