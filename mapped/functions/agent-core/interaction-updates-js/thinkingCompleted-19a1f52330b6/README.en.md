# `thinkingCompleted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475892-475900](../../../../../reference/runtime/host-main.cjs#L475892-L475900) | `FunctionExpression` | no | `thinkingDurationMs, messageStartedAtMs` |
| [evaluation:255202-255210](../../../../../reference/runtime/sand-eval-runner.cjs#L255202-L255210) | `FunctionExpression` | no | `thinkingDurationMs, messageStartedAtMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475892-475900](../../../../../reference/runtime/host-main.cjs#L475892-L475900) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255202-255210](../../../../../reference/runtime/sand-eval-runner.cjs#L255202-L255210) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475892

Calls written directly in this body: `new InteractionUpdate`, `new ThinkingCompletedUpdate`.

SHA-256 of the source span: `35615045641c14f0fe0bba58049dbf7a4d77ffdaed34fca85e567e75c80de7c3`.

### evaluation:255202

Calls written directly in this body: `new InteractionUpdate`, `new ThinkingCompletedUpdate`.

SHA-256 of the source span: `35615045641c14f0fe0bba58049dbf7a4d77ffdaed34fca85e567e75c80de7c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
