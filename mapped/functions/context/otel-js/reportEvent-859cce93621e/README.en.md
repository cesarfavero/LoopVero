# `reportEvent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:2336-2356](../../../../../reference/runtime/sand-eval-runner.cjs#L2336-L2356) | `FunctionDeclaration` | no | `ctx, name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:2336-2356](../../../../../reference/runtime/sand-eval-runner.cjs#L2336-L2356) | 2 | 0 | 0 | 1 | 0 | 1 |

### evaluation:2336

Calls written directly in this body: `Date.now`, `context.active`, `copyInheritableAttributes`, `ctx.get`, `eventSpan.end`, `eventSpan.setAttribute`, `getSpan2`, `getTracer`, `rootSpan.setAttribute`, `trace.setSpan`, `tracer.startSpan`.

SHA-256 of the source span: `b1c42f607697fc413550ccae903505de48ece45f843ed331686edf57963f4a2b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
