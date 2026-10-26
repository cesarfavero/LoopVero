# `flushPostTurnEndedWork`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-listener.js` · [Module README](../../../../modules/agent-core/interaction-listener-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475827-475829](../../../../../reference/runtime/host-main.cjs#L475827-L475829) | `FunctionDeclaration` | yes | `ctx, listener` |
| [evaluation:255061-255063](../../../../../reference/runtime/sand-eval-runner.cjs#L255061-L255063) | `FunctionDeclaration` | yes | `ctx, listener` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475827-475829](../../../../../reference/runtime/host-main.cjs#L475827-L475829) | 0 | 0 | 1 | 0 | 0 | 0 |
| [evaluation:255061-255063](../../../../../reference/runtime/sand-eval-runner.cjs#L255061-L255063) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:475827

Calls written directly in this body: `listener.flushPostTurnEndedWork`.

SHA-256 of the source span: `2c9d775b2a2abdd4a2449f560efb0c1560ea1e0a968946b012afb80261176fb9`.

### evaluation:255061

Calls written directly in this body: `listener.flushPostTurnEndedWork`.

SHA-256 of the source span: `2c9d775b2a2abdd4a2449f560efb0c1560ea1e0a968946b012afb80261176fb9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
