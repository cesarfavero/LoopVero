# `thinkingDelta`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475883-475891](../../../../../reference/runtime/host-main.cjs#L475883-L475891) | `FunctionExpression` | no | `text3, thinkingStyle, messageStartedAtMs` |
| [evaluation:255193-255201](../../../../../reference/runtime/sand-eval-runner.cjs#L255193-L255201) | `FunctionExpression` | no | `text3, thinkingStyle, messageStartedAtMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475883-475891](../../../../../reference/runtime/host-main.cjs#L475883-L475891) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255193-255201](../../../../../reference/runtime/sand-eval-runner.cjs#L255193-L255201) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475883

Calls written directly in this body: `new InteractionUpdate`, `new ThinkingDeltaUpdate`.

SHA-256 of the source span: `a89e2387ae5d13ecd3673fa5525397fbd41b9c7a3c38eec2b137187b4536170a`.

### evaluation:255193

Calls written directly in this body: `new InteractionUpdate`, `new ThinkingDeltaUpdate`.

SHA-256 of the source span: `a89e2387ae5d13ecd3673fa5525397fbd41b9c7a3c38eec2b137187b4536170a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
