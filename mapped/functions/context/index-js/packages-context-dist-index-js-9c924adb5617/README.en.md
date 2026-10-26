# `../packages/context/dist/index.js`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/index.js` · [Module README](../../../../modules/context/index-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225899-225906](../../../../../reference/runtime/host-main.cjs#L225899-L225906) | `FunctionExpression` | no | `(none)` |
| [evaluation:2413-2420](../../../../../reference/runtime/sand-eval-runner.cjs#L2413-L2420) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225899-225906](../../../../../reference/runtime/host-main.cjs#L225899-L225906) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2413-2420](../../../../../reference/runtime/sand-eval-runner.cjs#L2413-L2420) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225899

Calls written directly in this body: `init_abort_reason`, `init_browser_bridge`, `init_core3`, `init_logger`, `init_otel`.

SHA-256 of the source span: `5c3a0fc8348e31ec49f8c7223846e4e215f1b099452b79bb1ff4fab33e899d78`.

### evaluation:2413

Calls written directly in this body: `init_abort_reason`, `init_browser_bridge`, `init_core`, `init_logger`, `init_otel`.

SHA-256 of the source span: `3f22ee23ca71fd5e5ed7d0afa7978940689baa4a5f981d6b5592eb1cd065bd38`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
