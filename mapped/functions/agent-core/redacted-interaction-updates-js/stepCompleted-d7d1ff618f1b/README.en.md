# `stepCompleted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-updates.js` · [Module README](../../../../modules/agent-core/redacted-interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615803-615815](../../../../../reference/runtime/host-main.cjs#L615803-L615815) | `FunctionExpression` | no | `privacyMode, stepId, stepDurationMs` |
| [evaluation:284523-284535](../../../../../reference/runtime/sand-eval-runner.cjs#L284523-L284535) | `FunctionExpression` | no | `privacyMode, stepId, stepDurationMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615803-615815](../../../../../reference/runtime/host-main.cjs#L615803-L615815) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284523-284535](../../../../../reference/runtime/sand-eval-runner.cjs#L284523-L284535) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615803

Calls written directly in this body: `BigInt`.

SHA-256 of the source span: `e941e06bf60323048984f6a27c7d59f8fe712f4d593da1645b9c2a3130aac8dd`.

### evaluation:284523

Calls written directly in this body: `BigInt`.

SHA-256 of the source span: `e941e06bf60323048984f6a27c7d59f8fe712f4d593da1645b9c2a3130aac8dd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
