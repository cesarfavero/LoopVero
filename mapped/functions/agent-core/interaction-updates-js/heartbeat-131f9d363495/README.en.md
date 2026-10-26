# `heartbeat`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475964-475971](../../../../../reference/runtime/host-main.cjs#L475964-L475971) | `FunctionExpression` | no | `(none)` |
| [evaluation:255274-255281](../../../../../reference/runtime/sand-eval-runner.cjs#L255274-L255281) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475964-475971](../../../../../reference/runtime/host-main.cjs#L475964-L475971) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255274-255281](../../../../../reference/runtime/sand-eval-runner.cjs#L255274-L255281) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475964

Calls written directly in this body: `new HeartbeatUpdate`, `new InteractionUpdate`.

SHA-256 of the source span: `58c8873b6b6c00be60df35f95c604e5fcf3a4d4933f39ca0a9c63824e6ac6a3f`.

### evaluation:255274

Calls written directly in this body: `new HeartbeatUpdate`, `new InteractionUpdate`.

SHA-256 of the source span: `58c8873b6b6c00be60df35f95c604e5fcf3a4d4933f39ca0a9c63824e6ac6a3f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
