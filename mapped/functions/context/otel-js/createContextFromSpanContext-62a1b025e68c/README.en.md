# `createContextFromSpanContext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225837-225853](../../../../../reference/runtime/host-main.cjs#L225837-L225853) | `FunctionDeclaration` | no | `spanContext, name18, existingContext` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225837-225853](../../../../../reference/runtime/host-main.cjs#L225837-L225853) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:225837

Calls written directly in this body: `context.active`, `createContext`, `ctx.with`, `getTracer`, `parentCtx.withName`, `trace.setSpanContext`, `tracer.startSpan`.

SHA-256 of the source span: `69d81d37b42d6e15152febc1510396161aa3153e9f2e473e69a8f5a3c32dcad1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
