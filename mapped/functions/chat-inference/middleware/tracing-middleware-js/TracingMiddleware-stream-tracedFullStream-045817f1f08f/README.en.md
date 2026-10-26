# `TracingMiddleware.stream/tracedFullStream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/tracing-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/tracing-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617865-617892](../../../../../../reference/runtime/host-main.cjs#L617865-L617892) | `FunctionExpression` | yes | `(none)` |
| [evaluation:287236-287263](../../../../../../reference/runtime/sand-eval-runner.cjs#L287236-L287263) | `FunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617865-617892](../../../../../../reference/runtime/host-main.cjs#L617865-L617892) | 3 | 1 | 0 | 0 | 1 | 1 |
| [evaluation:287236-287263](../../../../../../reference/runtime/sand-eval-runner.cjs#L287236-L287263) | 3 | 1 | 0 | 0 | 1 | 1 |

### host:617865

Calls written directly in this body: `performance.now`, `ttfToolCallHistogram.histogram`, `ttftHistogram.histogram`.

Assignment or increment targets: `firstTokenTime`, `firstToolCallTime`, `seenFirstToken`, `seenFirstToolCall`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `b0119fc6efed7ce1c9599477df4b36990a6824c1915084e556465bcf1aa507de`.

### evaluation:287236

Calls written directly in this body: `performance.now`, `ttfToolCallHistogram.histogram`, `ttftHistogram.histogram`.

Assignment or increment targets: `firstTokenTime`, `firstToolCallTime`, `seenFirstToken`, `seenFirstToolCall`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `e11241d5c4cfb0488a6cff595faee58f32607c18385ce09e51e047ced1fe6184`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
