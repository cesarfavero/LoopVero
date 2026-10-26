# `withLogAttributes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225743-225747](../../../../../reference/runtime/host-main.cjs#L225743-L225747) | `FunctionDeclaration` | no | `ctx, attributes` |
| [evaluation:2231-2235](../../../../../reference/runtime/sand-eval-runner.cjs#L2231-L2235) | `FunctionDeclaration` | no | `ctx, attributes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225743-225747](../../../../../reference/runtime/host-main.cjs#L225743-L225747) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:2231-2235](../../../../../reference/runtime/sand-eval-runner.cjs#L2231-L2235) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225743

Calls written directly in this body: `createLoggerMiddleware`, `ctx.get`, `ctx.with`.

SHA-256 of the source span: `94df024afafc167a2d0655119e8d720b162f5b9e95526c54b922a2e9941944b4`.

### evaluation:2231

Calls written directly in this body: `createLoggerMiddleware`, `ctx.get`, `ctx.with`.

SHA-256 of the source span: `94df024afafc167a2d0655119e8d720b162f5b9e95526c54b922a2e9941944b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
