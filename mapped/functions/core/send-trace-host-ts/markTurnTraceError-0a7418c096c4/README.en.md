# `markTurnTraceError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/send-trace-host.ts` · [Module README](../../../../modules/core/send-trace-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528778-528790](../../../../../reference/runtime/sand-eval-runner.cjs#L528778-L528790) | `FunctionDeclaration` | no | `trace2, error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528778-528790](../../../../../reference/runtime/sand-eval-runner.cjs#L528778-L528790) | 2 | 0 | 0 | 1 | 0 | 1 |

### evaluation:528778

Calls written directly in this body: `String`, `errorLogTag`, `new Error`, `process.stderr.write`, `trace2.span.recordException`, `trace2.span.setAttribute`, `trace2.span.setStatus`.

SHA-256 of the source span: `1f7cb8e1755715c91d20f99491b6082c8f0be033783e030f44dc960a1560f845`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
