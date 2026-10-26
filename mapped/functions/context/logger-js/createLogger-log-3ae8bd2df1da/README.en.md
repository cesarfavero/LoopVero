# `createLogger/log`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [state-worker:21595-21599](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21595-L21599) | `FunctionDeclaration` | no | `ctx, entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:21595-21599](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21595-L21599) | 0 | 0 | 0 | 0 | 0 | 0 |

### state-worker:21595

Calls written directly in this body: `getLoggerBackend`, `logger7.log`, `new Date`.

SHA-256 of the source span: `a1d26730a0f35c45005d0821d1bd405ee0813066554a044d820e8e089ba9018e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
