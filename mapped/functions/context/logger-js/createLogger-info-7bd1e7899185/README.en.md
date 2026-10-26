# `createLogger/info`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225722-225724](../../../../../reference/runtime/host-main.cjs#L225722-L225724) | `ArrowFunctionExpression` | no | `ctx, message, metadata2` |
| [evaluation:2210-2212](../../../../../reference/runtime/sand-eval-runner.cjs#L2210-L2212) | `ArrowFunctionExpression` | no | `ctx, message, metadata2` |
| [state-worker:21604-21606](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21604-L21606) | `ArrowFunctionExpression` | no | `ctx, message, metadata` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225722-225724](../../../../../reference/runtime/host-main.cjs#L225722-L225724) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2210-2212](../../../../../reference/runtime/sand-eval-runner.cjs#L2210-L2212) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:21604-21606](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21604-L21606) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225722

Calls written directly in this body: `log5`.

SHA-256 of the source span: `1a7f5f795ca6839717a67944b526983904be69fa56326ca8fd0736b317adcd0b`.

### evaluation:2210

Calls written directly in this body: `log5`.

SHA-256 of the source span: `1a7f5f795ca6839717a67944b526983904be69fa56326ca8fd0736b317adcd0b`.

### state-worker:21604

Calls written directly in this body: `log`.

SHA-256 of the source span: `bde746df81c7bd5f684b5dd6f8734a5efcaf9094d7d92f86fa81cd10c328577a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
