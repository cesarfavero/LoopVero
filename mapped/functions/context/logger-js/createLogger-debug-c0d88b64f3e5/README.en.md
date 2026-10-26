# `createLogger/debug`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225719-225721](../../../../../reference/runtime/host-main.cjs#L225719-L225721) | `ArrowFunctionExpression` | no | `ctx, message, metadata2` |
| [evaluation:2207-2209](../../../../../reference/runtime/sand-eval-runner.cjs#L2207-L2209) | `ArrowFunctionExpression` | no | `ctx, message, metadata2` |
| [state-worker:21601-21603](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21601-L21603) | `ArrowFunctionExpression` | no | `ctx, message, metadata` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225719-225721](../../../../../reference/runtime/host-main.cjs#L225719-L225721) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2207-2209](../../../../../reference/runtime/sand-eval-runner.cjs#L2207-L2209) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:21601-21603](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21601-L21603) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225719

Calls written directly in this body: `log5`.

SHA-256 of the source span: `be54847eabc92a20fd6786972e6d59e82d09a21c49a477328d272d5af1c39252`.

### evaluation:2207

Calls written directly in this body: `log5`.

SHA-256 of the source span: `be54847eabc92a20fd6786972e6d59e82d09a21c49a477328d272d5af1c39252`.

### state-worker:21601

Calls written directly in this body: `log`.

SHA-256 of the source span: `04ef2b3c5c2a01a15d0730274b1e1c948e1956904d4dfe4ffa922fc714cbb2a9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
