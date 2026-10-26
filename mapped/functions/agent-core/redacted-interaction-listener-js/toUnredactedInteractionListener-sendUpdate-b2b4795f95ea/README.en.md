# `toUnredactedInteractionListener/sendUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-listener.js` · [Module README](../../../../modules/agent-core/redacted-interaction-listener-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615529-615531](../../../../../reference/runtime/host-main.cjs#L615529-L615531) | `FunctionExpression` | yes | `ctx, update` |
| [evaluation:284249-284251](../../../../../reference/runtime/sand-eval-runner.cjs#L284249-L284251) | `FunctionExpression` | yes | `ctx, update` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615529-615531](../../../../../reference/runtime/host-main.cjs#L615529-L615531) | 0 | 0 | 1 | 0 | 0 | 0 |
| [evaluation:284249-284251](../../../../../reference/runtime/sand-eval-runner.cjs#L284249-L284251) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:615529

Calls written directly in this body: `delegate.sendUpdate`, `toRedactedInteractionUpdate`.

SHA-256 of the source span: `d2cea52a43e42a8792def0d14f811e152f3521923b4c2a3f9bc6abef83a33eac`.

### evaluation:284249

Calls written directly in this body: `delegate.sendUpdate`, `toRedactedInteractionUpdate`.

SHA-256 of the source span: `d2cea52a43e42a8792def0d14f811e152f3521923b4c2a3f9bc6abef83a33eac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
