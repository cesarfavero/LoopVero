# `getLoggerBackend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225709-225711](../../../../../reference/runtime/host-main.cjs#L225709-L225711) | `FunctionDeclaration` | no | `ctx` |
| [evaluation:2197-2199](../../../../../reference/runtime/sand-eval-runner.cjs#L2197-L2199) | `FunctionDeclaration` | no | `ctx` |
| [state-worker:21591-21593](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21591-L21593) | `FunctionDeclaration` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225709-225711](../../../../../reference/runtime/host-main.cjs#L225709-L225711) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:2197-2199](../../../../../reference/runtime/sand-eval-runner.cjs#L2197-L2199) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:21591-21593](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21591-L21593) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225709

Calls written directly in this body: `ctx.get`.

SHA-256 of the source span: `37c4d19b91a746e1b0bf2d21dff985cdddc6117c6b2cf398bcb5b0bdc684ec54`.

### evaluation:2197

Calls written directly in this body: `ctx.get`.

SHA-256 of the source span: `37c4d19b91a746e1b0bf2d21dff985cdddc6117c6b2cf398bcb5b0bdc684ec54`.

### state-worker:21591

Calls written directly in this body: `ctx.get`.

SHA-256 of the source span: `37c4d19b91a746e1b0bf2d21dff985cdddc6117c6b2cf398bcb5b0bdc684ec54`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
