# `createColorPalette/level`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225428-225443](../../../../../reference/runtime/host-main.cjs#L225428-L225443) | `ArrowFunctionExpression` | no | `level, value` |
| [evaluation:1916-1931](../../../../../reference/runtime/sand-eval-runner.cjs#L1916-L1931) | `ArrowFunctionExpression` | no | `level, value` |
| [state-worker:21305-21320](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21305-L21320) | `ArrowFunctionExpression` | no | `level, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225428-225443](../../../../../reference/runtime/host-main.cjs#L225428-L225443) | 5 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:1916-1931](../../../../../reference/runtime/sand-eval-runner.cjs#L1916-L1931) | 5 | 0 | 0 | 5 | 0 | 0 |
| [state-worker:21305-21320](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21305-L21320) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:225428

Calls written directly in this body: `blue`, `boldRed`, `magenta`, `yellow`.

SHA-256 of the source span: `fd75e3692a0940683e09292b1c709c25d185b1a27df56c7b8f1c71a45f4e7591`.

### evaluation:1916

Calls written directly in this body: `blue`, `boldRed`, `magenta`, `yellow`.

SHA-256 of the source span: `fd75e3692a0940683e09292b1c709c25d185b1a27df56c7b8f1c71a45f4e7591`.

### state-worker:21305

Calls written directly in this body: `blue`, `boldRed`, `magenta`, `yellow`.

SHA-256 of the source span: `fd75e3692a0940683e09292b1c709c25d185b1a27df56c7b8f1c71a45f4e7591`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
