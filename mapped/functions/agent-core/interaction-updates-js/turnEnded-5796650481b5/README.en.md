# `turnEnded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475988-476004](../../../../../reference/runtime/host-main.cjs#L475988-L476004) | `FunctionExpression` | no | `usage, endedAtMs` |
| [evaluation:255298-255314](../../../../../reference/runtime/sand-eval-runner.cjs#L255298-L255314) | `FunctionExpression` | no | `usage, endedAtMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475988-476004](../../../../../reference/runtime/host-main.cjs#L475988-L476004) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255298-255314](../../../../../reference/runtime/sand-eval-runner.cjs#L255298-L255314) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:475988

Calls written directly in this body: `BigInt`, `new InteractionUpdate`, `new TurnEndedUpdate`.

SHA-256 of the source span: `93642a4f7a0fbbe875fff35bcd07f80fc38c95d34072aa547c0a19e322b30389`.

### evaluation:255298

Calls written directly in this body: `BigInt`, `new InteractionUpdate`, `new TurnEndedUpdate`.

SHA-256 of the source span: `93642a4f7a0fbbe875fff35bcd07f80fc38c95d34072aa547c0a19e322b30389`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
