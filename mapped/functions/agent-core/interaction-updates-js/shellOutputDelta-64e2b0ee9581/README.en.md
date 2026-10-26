# `shellOutputDelta`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475980-475987](../../../../../reference/runtime/host-main.cjs#L475980-L475987) | `FunctionExpression` | no | `event` |
| [evaluation:255290-255297](../../../../../reference/runtime/sand-eval-runner.cjs#L255290-L255297) | `FunctionExpression` | no | `event` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475980-475987](../../../../../reference/runtime/host-main.cjs#L475980-L475987) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255290-255297](../../../../../reference/runtime/sand-eval-runner.cjs#L255290-L255297) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475980

Calls written directly in this body: `new InteractionUpdate`, `new ShellOutputDeltaUpdate`.

SHA-256 of the source span: `b722fbc93ee64d27b190219f5ab3f0983b74086913f4abdac9f1220b9457f402`.

### evaluation:255290

Calls written directly in this body: `new InteractionUpdate`, `new ShellOutputDeltaUpdate`.

SHA-256 of the source span: `b722fbc93ee64d27b190219f5ab3f0983b74086913f4abdac9f1220b9457f402`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
