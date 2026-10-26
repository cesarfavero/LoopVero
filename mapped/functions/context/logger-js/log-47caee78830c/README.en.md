# `log`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:21588-21588](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21588-L21588) | `ArrowFunctionExpression` | no | `ctx, entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:21588-21588](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21588-L21588) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at state-worker:21588 uses an implicit arrow-function return.

### state-worker:21588

Calls written directly in this body: `defaultLoggerBackendImpl.log`.

SHA-256 of the source span: `fcff63c54f0ec8d6339096d0d6703804ec5e23f9d3e0f9a644d088a05fce8d14`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
