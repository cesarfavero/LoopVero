# `toolCallCompleted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-updates.js` · [Module README](../../../../modules/agent-core/redacted-interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615619-615629](../../../../../reference/runtime/host-main.cjs#L615619-L615629) | `FunctionExpression` | no | `callId, toolCall2, modelCallId` |
| [evaluation:284339-284349](../../../../../reference/runtime/sand-eval-runner.cjs#L284339-L284349) | `FunctionExpression` | no | `callId, toolCall2, modelCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615619-615629](../../../../../reference/runtime/host-main.cjs#L615619-L615629) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284339-284349](../../../../../reference/runtime/sand-eval-runner.cjs#L284339-L284349) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615619

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `25af4da4a3d398d602c580a3030f7150762ba420ad501b813bd6787a0e094004`.

### evaluation:284339

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `25af4da4a3d398d602c580a3030f7150762ba420ad501b813bd6787a0e094004`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
