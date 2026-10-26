# `shouldSampleSend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/send-trace.ts` · [Module README](../../../../../modules/shared/observability/send-trace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528679-528683](../../../../../../reference/runtime/sand-eval-runner.cjs#L528679-L528683) | `FunctionDeclaration` | no | `ratio = SEND_TRACE_SAMPLE_RATIO` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528679-528683](../../../../../../reference/runtime/sand-eval-runner.cjs#L528679-L528683) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:528679

Calls written directly in this body: `Math.random`.

SHA-256 of the source span: `45c6059bda8ad39b9883470be9f4fc9755172fe4c4801ae1c07c202d6ae9ceed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
