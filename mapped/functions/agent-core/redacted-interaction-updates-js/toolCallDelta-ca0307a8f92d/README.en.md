# `toolCallDelta`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-updates.js` · [Module README](../../../../modules/agent-core/redacted-interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615630-615645](../../../../../reference/runtime/host-main.cjs#L615630-L615645) | `FunctionExpression` | no | `callId, toolCallDelta, modelCallId, messageStartedAtMs` |
| [evaluation:284350-284365](../../../../../reference/runtime/sand-eval-runner.cjs#L284350-L284365) | `FunctionExpression` | no | `callId, toolCallDelta, modelCallId, messageStartedAtMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615630-615645](../../../../../reference/runtime/host-main.cjs#L615630-L615645) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284350-284365](../../../../../reference/runtime/sand-eval-runner.cjs#L284350-L284365) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615630

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d4dc02c2ea7cd88fd4af29819d31fe211f8b62ac4b467f2f92a1526bf153aa77`.

### evaluation:284350

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `d4dc02c2ea7cd88fd4af29819d31fe211f8b62ac4b467f2f92a1526bf153aa77`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
