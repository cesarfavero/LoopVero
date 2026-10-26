# `withSpan`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225791-225812](../../../../../reference/runtime/host-main.cjs#L225791-L225812) | `FunctionDeclaration` | no | `ctx, options2` |
| [evaluation:2279-2300](../../../../../reference/runtime/sand-eval-runner.cjs#L2279-L2300) | `FunctionDeclaration` | no | `ctx, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225791-225812](../../../../../reference/runtime/host-main.cjs#L225791-L225812) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:2279-2300](../../../../../reference/runtime/sand-eval-runner.cjs#L2279-L2300) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:225791

Calls written directly in this body: `.with`, `Date.now`, `context.active`, `copyInheritableAttributes`, `ctx.get`, `ctx.with`, `ctxWith.with`, `getTracer`, `isChildSpanSuppressed`, `resolveSpanName`, `trace.setSpan`, `tracer.startSpan`.

Assignment or increment targets: `ctxWith`, `span`.

SHA-256 of the source span: `3bf79449b9cdedbf2fb83e1d623d324c043031f32c8ccecbb65bb8242cd10108`.

### evaluation:2279

Calls written directly in this body: `.with`, `Date.now`, `context.active`, `copyInheritableAttributes`, `ctx.get`, `ctx.with`, `ctxWith.with`, `getTracer`, `isChildSpanSuppressed`, `resolveSpanName`, `trace.setSpan`, `tracer.startSpan`.

Assignment or increment targets: `ctxWith`, `span`.

SHA-256 of the source span: `3bf79449b9cdedbf2fb83e1d623d324c043031f32c8ccecbb65bb8242cd10108`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
