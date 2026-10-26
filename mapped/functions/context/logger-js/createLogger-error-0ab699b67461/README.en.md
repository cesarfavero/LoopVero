# `createLogger/error`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225728-225730](../../../../../reference/runtime/host-main.cjs#L225728-L225730) | `ArrowFunctionExpression` | no | `ctx, message, error64, metadata2` |
| [evaluation:2216-2218](../../../../../reference/runtime/sand-eval-runner.cjs#L2216-L2218) | `ArrowFunctionExpression` | no | `ctx, message, error63, metadata2` |
| [state-worker:21610-21612](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21610-L21612) | `ArrowFunctionExpression` | no | `ctx, message, error, metadata` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225728-225730](../../../../../reference/runtime/host-main.cjs#L225728-L225730) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2216-2218](../../../../../reference/runtime/sand-eval-runner.cjs#L2216-L2218) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:21610-21612](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21610-L21612) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225728

Calls written directly in this body: `log5`.

SHA-256 of the source span: `9e4cea518aae3d584115ed7ee665a8fb192c36bbbb9f9ee27e3a1433f37756ca`.

### evaluation:2216

Calls written directly in this body: `log5`.

SHA-256 of the source span: `d8d097f02875312c792a400820ebcc5f9d87dd5ce7b8a11b15dcac882ed339ee`.

### state-worker:21610

Calls written directly in this body: `log`.

SHA-256 of the source span: `fb94aec9f91abfada11a60fb89fbabf4e028a54aeb6ad05791754254f2edbbea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
