# `createContextFromRemoteSpanContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:2357-2367](../../../../../reference/runtime/sand-eval-runner.cjs#L2357-L2367) | `FunctionDeclaration` | no | `spanContext, name18, existingContext` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:2357-2367](../../../../../reference/runtime/sand-eval-runner.cjs#L2357-L2367) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:2357

Calls written directly in this body: `createContext`, `ctx.with`, `parentCtx.withName`, `trace.wrapSpanContext`.

SHA-256 of the source span: `7184abd2186af16d1410b447b807c5cdcb845e82c4e4109641de9f6ec739f413`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
