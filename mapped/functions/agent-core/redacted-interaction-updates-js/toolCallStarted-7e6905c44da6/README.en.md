# `toolCallStarted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-updates.js` · [Module README](../../../../modules/agent-core/redacted-interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615608-615618](../../../../../reference/runtime/host-main.cjs#L615608-L615618) | `FunctionExpression` | no | `callId, toolCall2, modelCallId` |
| [evaluation:284328-284338](../../../../../reference/runtime/sand-eval-runner.cjs#L284328-L284338) | `FunctionExpression` | no | `callId, toolCall2, modelCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615608-615618](../../../../../reference/runtime/host-main.cjs#L615608-L615618) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284328-284338](../../../../../reference/runtime/sand-eval-runner.cjs#L284328-L284338) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615608

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `38bcace5c8cb288ecfdf636642cc3862ab8f2b63ae8599db781fe59d3d525b06`.

### evaluation:284328

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `38bcace5c8cb288ecfdf636642cc3862ab8f2b63ae8599db781fe59d3d525b06`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
