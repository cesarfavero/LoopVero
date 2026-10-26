# `toUnredactedInteractionListener/query`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-listener.js` · [Module README](../../../../modules/agent-core/redacted-interaction-listener-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615532-615535](../../../../../reference/runtime/host-main.cjs#L615532-L615535) | `FunctionExpression` | yes | `ctx, query2` |
| [evaluation:284252-284255](../../../../../reference/runtime/sand-eval-runner.cjs#L284252-L284255) | `FunctionExpression` | yes | `ctx, query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615532-615535](../../../../../reference/runtime/host-main.cjs#L615532-L615535) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:284252-284255](../../../../../reference/runtime/sand-eval-runner.cjs#L284252-L284255) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:615532

Calls written directly in this body: `delegate.query`, `fromRedactedInteractionResponse`, `toRedactedInteractionQuery`.

SHA-256 of the source span: `c3d5c91448a2f5dd39ea775208cc8ed00d8b7af94b33b0ead327f6fa9a338c87`.

### evaluation:284252

Calls written directly in this body: `delegate.query`, `fromRedactedInteractionResponse`, `toRedactedInteractionQuery`.

SHA-256 of the source span: `c3d5c91448a2f5dd39ea775208cc8ed00d8b7af94b33b0ead327f6fa9a338c87`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
