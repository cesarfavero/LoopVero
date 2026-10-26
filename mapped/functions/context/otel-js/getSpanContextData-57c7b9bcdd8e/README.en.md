# `getSpanContextData`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225819-225836](../../../../../reference/runtime/host-main.cjs#L225819-L225836) | `FunctionDeclaration` | no | `ctx` |
| [evaluation:2318-2335](../../../../../reference/runtime/sand-eval-runner.cjs#L2318-L2335) | `FunctionDeclaration` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225819-225836](../../../../../reference/runtime/host-main.cjs#L225819-L225836) | 2 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:2318-2335](../../../../../reference/runtime/sand-eval-runner.cjs#L2318-L2335) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:225819

Calls written directly in this body: `ctx.get`, `getSpan2`, `sc.traceState.toString`, `span.spanContext`.

SHA-256 of the source span: `5b8b860131c65f4a450635a02abde61592b8d2a770662592c71fc29ff8a6ba5e`.

### evaluation:2318

Calls written directly in this body: `ctx.get`, `getSpan2`, `sc.traceState.toString`, `span.spanContext`.

SHA-256 of the source span: `5b8b860131c65f4a450635a02abde61592b8d2a770662592c71fc29ff8a6ba5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
