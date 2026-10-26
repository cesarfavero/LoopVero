# `createLogger/warn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225725-225727](../../../../../reference/runtime/host-main.cjs#L225725-L225727) | `ArrowFunctionExpression` | no | `ctx, message, metadata2` |
| [evaluation:2213-2215](../../../../../reference/runtime/sand-eval-runner.cjs#L2213-L2215) | `ArrowFunctionExpression` | no | `ctx, message, metadata2` |
| [state-worker:21607-21609](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21607-L21609) | `ArrowFunctionExpression` | no | `ctx, message, metadata` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225725-225727](../../../../../reference/runtime/host-main.cjs#L225725-L225727) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2213-2215](../../../../../reference/runtime/sand-eval-runner.cjs#L2213-L2215) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:21607-21609](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21607-L21609) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225725

Calls written directly in this body: `log5`.

SHA-256 of the source span: `9d8b688bb0dd1f7192f748d632f1663c7517fefd68e59f9bf619cbf54019f626`.

### evaluation:2213

Calls written directly in this body: `log5`.

SHA-256 of the source span: `9d8b688bb0dd1f7192f748d632f1663c7517fefd68e59f9bf619cbf54019f626`.

### state-worker:21607

Calls written directly in this body: `log`.

SHA-256 of the source span: `367dd05cff7c957b1268fd797ec266875817bba442e09ae383a13afb18637534`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
