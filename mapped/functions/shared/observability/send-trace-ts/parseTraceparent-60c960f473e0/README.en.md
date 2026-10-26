# `parseTraceparent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/send-trace.ts` · [Module README](../../../../../modules/shared/observability/send-trace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:484107-484119](../../../../../../reference/runtime/host-main.cjs#L484107-L484119) | `FunctionDeclaration` | no | `traceparent` |
| [evaluation:528694-528706](../../../../../../reference/runtime/sand-eval-runner.cjs#L528694-L528706) | `FunctionDeclaration` | no | `traceparent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:484107-484119](../../../../../../reference/runtime/host-main.cjs#L484107-L484119) | 7 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:528694-528706](../../../../../../reference/runtime/sand-eval-runner.cjs#L528694-L528706) | 7 | 0 | 0 | 8 | 0 | 0 |

### host:484107

Calls written directly in this body: `.split`, `HEX_FLAGS.test`, `HEX_SPAN_ID.test`, `HEX_TRACE_ID.test`, `Number.isNaN`, `Number.parseInt`, `traceparent.trim`.

SHA-256 of the source span: `13548de5213b25d265594f9fd5fd6924ed70041ee97e786e0c6902d614a58a98`.

### evaluation:528694

Calls written directly in this body: `.split`, `HEX_FLAGS.test`, `HEX_SPAN_ID.test`, `HEX_TRACE_ID.test`, `Number.isNaN`, `Number.parseInt`, `traceparent.trim`.

SHA-256 of the source span: `13548de5213b25d265594f9fd5fd6924ed70041ee97e786e0c6902d614a58a98`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
