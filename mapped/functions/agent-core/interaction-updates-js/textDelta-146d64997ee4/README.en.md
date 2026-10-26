# `textDelta`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475843-475851](../../../../../reference/runtime/host-main.cjs#L475843-L475851) | `FunctionExpression` | no | `text3, messageStartedAtMs` |
| [evaluation:255153-255161](../../../../../reference/runtime/sand-eval-runner.cjs#L255153-L255161) | `FunctionExpression` | no | `text3, messageStartedAtMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475843-475851](../../../../../reference/runtime/host-main.cjs#L475843-L475851) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255153-255161](../../../../../reference/runtime/sand-eval-runner.cjs#L255153-L255161) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475843

Calls written directly in this body: `new InteractionUpdate`, `new TextDeltaUpdate`.

SHA-256 of the source span: `8dd496a35511a77f6cdaa4477f1e40c577a801e3639e28d11a370227105e747c`.

### evaluation:255153

Calls written directly in this body: `new InteractionUpdate`, `new TextDeltaUpdate`.

SHA-256 of the source span: `8dd496a35511a77f6cdaa4477f1e40c577a801e3639e28d11a370227105e747c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
