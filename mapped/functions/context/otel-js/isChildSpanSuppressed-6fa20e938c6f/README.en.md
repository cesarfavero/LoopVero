# `isChildSpanSuppressed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225782-225787](../../../../../reference/runtime/host-main.cjs#L225782-L225787) | `FunctionDeclaration` | no | `ctx, parentSpan` |
| [evaluation:2270-2275](../../../../../reference/runtime/sand-eval-runner.cjs#L2270-L2275) | `FunctionDeclaration` | no | `ctx, parentSpan` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225782-225787](../../../../../reference/runtime/host-main.cjs#L225782-L225787) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:2270-2275](../../../../../reference/runtime/sand-eval-runner.cjs#L2270-L2275) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:225782

Calls written directly in this body: `ctx.get`, `isChildSpanNameSuppressed`, `resolveSpanName`.

SHA-256 of the source span: `73b4ddff067c133a7eca8377d05138424ecd3032f23a0e0eb5374c8d21345761`.

### evaluation:2270

Calls written directly in this body: `ctx.get`, `isChildSpanNameSuppressed`, `resolveSpanName`.

SHA-256 of the source span: `73b4ddff067c133a7eca8377d05138424ecd3032f23a0e0eb5374c8d21345761`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
