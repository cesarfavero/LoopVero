# `createLoggerMiddleware/log`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225735-225740](../../../../../reference/runtime/host-main.cjs#L225735-L225740) | `ArrowFunctionExpression` | no | `ctx, entry` |
| [evaluation:2223-2228](../../../../../reference/runtime/sand-eval-runner.cjs#L2223-L2228) | `ArrowFunctionExpression` | no | `ctx, entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225735-225740](../../../../../reference/runtime/host-main.cjs#L225735-L225740) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2223-2228](../../../../../reference/runtime/sand-eval-runner.cjs#L2223-L2228) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225735

Calls written directly in this body: `backend.log`.

SHA-256 of the source span: `f9219336f1266f29bd5754302ec10871818cf3664108af6c77f64e83a62ddc05`.

### evaluation:2223

Calls written directly in this body: `backend.log`.

SHA-256 of the source span: `f9219336f1266f29bd5754302ec10871818cf3664108af6c77f64e83a62ddc05`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
