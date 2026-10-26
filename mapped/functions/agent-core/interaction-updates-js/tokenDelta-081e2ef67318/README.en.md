# `tokenDelta`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475940-475947](../../../../../reference/runtime/host-main.cjs#L475940-L475947) | `FunctionExpression` | no | `tokens` |
| [evaluation:255250-255257](../../../../../reference/runtime/sand-eval-runner.cjs#L255250-L255257) | `FunctionExpression` | no | `tokens` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475940-475947](../../../../../reference/runtime/host-main.cjs#L475940-L475947) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255250-255257](../../../../../reference/runtime/sand-eval-runner.cjs#L255250-L255257) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475940

Calls written directly in this body: `new InteractionUpdate`, `new TokenDeltaUpdate`.

SHA-256 of the source span: `c49f892de9c75404c1d3700302adb2a22cf605a74ca8ec9f30b14fc7c5aabcb7`.

### evaluation:255250

Calls written directly in this body: `new InteractionUpdate`, `new TokenDeltaUpdate`.

SHA-256 of the source span: `c49f892de9c75404c1d3700302adb2a22cf605a74ca8ec9f30b14fc7c5aabcb7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
