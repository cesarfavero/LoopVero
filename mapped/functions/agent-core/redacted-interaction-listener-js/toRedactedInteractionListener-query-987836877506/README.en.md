# `toRedactedInteractionListener/query`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-listener.js` · [Module README](../../../../modules/agent-core/redacted-interaction-listener-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615545-615548](../../../../../reference/runtime/host-main.cjs#L615545-L615548) | `FunctionExpression` | yes | `ctx, query2` |
| [evaluation:284265-284268](../../../../../reference/runtime/sand-eval-runner.cjs#L284265-L284268) | `FunctionExpression` | yes | `ctx, query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615545-615548](../../../../../reference/runtime/host-main.cjs#L615545-L615548) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:284265-284268](../../../../../reference/runtime/sand-eval-runner.cjs#L284265-L284268) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:615545

Calls written directly in this body: `delegate.query`, `fromRedactedInteractionQuery`, `toRedactedInteractionResponse`.

SHA-256 of the source span: `d09df01cdb881fa34867f3b26505603b7987651efffebf060de409ebfc67b46e`.

### evaluation:284265

Calls written directly in this body: `delegate.query`, `fromRedactedInteractionQuery`, `toRedactedInteractionResponse`.

SHA-256 of the source span: `d09df01cdb881fa34867f3b26505603b7987651efffebf060de409ebfc67b46e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
