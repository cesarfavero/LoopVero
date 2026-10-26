# `createBufferedReporterPin/replay`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/buffered-reporter-pin.ts` · [Module README](../../../../../modules/shared/observability/buffered-reporter-pin-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430993-431003](../../../../../../reference/runtime/host-main.cjs#L430993-L431003) | `ArrowFunctionExpression` | no | `next, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430993-431003](../../../../../../reference/runtime/host-main.cjs#L430993-L431003) | 1 | 0 | 0 | 1 | 0 | 1 |

### host:430993

Calls written directly in this body: `next`, `options2.onReplayFailure`.

SHA-256 of the source span: `3a51fd44857a474fac5a3e3f8c5773df8e8bf13184782459dec58ce06db2b577`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
