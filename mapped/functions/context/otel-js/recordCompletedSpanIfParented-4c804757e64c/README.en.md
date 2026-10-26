# `recordCompletedSpanIfParented`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225861-225870](../../../../../reference/runtime/host-main.cjs#L225861-L225870) | `FunctionDeclaration` | no | `ctx, options2, endTime` |
| [evaluation:2375-2384](../../../../../reference/runtime/sand-eval-runner.cjs#L2375-L2384) | `FunctionDeclaration` | no | `ctx, options2, endTime` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225861-225870](../../../../../reference/runtime/host-main.cjs#L225861-L225870) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:2375-2384](../../../../../reference/runtime/sand-eval-runner.cjs#L2375-L2384) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:225861

Calls written directly in this body: `getSpan2`, `isChildSpanSuppressed`, `span.end`, `withSpan`.

SHA-256 of the source span: `794420bca6d1db0684c2ae765444e30f3f89161d2ebafe1ae64d770117ab9216`.

### evaluation:2375

Calls written directly in this body: `getSpan2`, `isChildSpanSuppressed`, `span.end`, `withSpan`.

SHA-256 of the source span: `794420bca6d1db0684c2ae765444e30f3f89161d2ebafe1ae64d770117ab9216`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
