# `copyInheritableAttributes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225767-225775](../../../../../reference/runtime/host-main.cjs#L225767-L225775) | `FunctionDeclaration` | no | `span, ctx` |
| [evaluation:2255-2263](../../../../../reference/runtime/sand-eval-runner.cjs#L2255-L2263) | `FunctionDeclaration` | no | `span, ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225767-225775](../../../../../reference/runtime/host-main.cjs#L225767-L225775) | 1 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:2255-2263](../../../../../reference/runtime/sand-eval-runner.cjs#L2255-L2263) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:225767

Calls written directly in this body: `ctx.get`, `span.setAttribute`.

SHA-256 of the source span: `87d5acd7678ab5947ddf980e69a122939faccaa3e151c9d79ec9c865742aa513`.

### evaluation:2255

Calls written directly in this body: `ctx.get`, `span.setAttribute`.

SHA-256 of the source span: `87d5acd7678ab5947ddf980e69a122939faccaa3e151c9d79ec9c865742aa513`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
