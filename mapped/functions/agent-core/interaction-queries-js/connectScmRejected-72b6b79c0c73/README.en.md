# `connectScmRejected`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475759-475774](../../../../../reference/runtime/host-main.cjs#L475759-L475774) | `FunctionExpression` | no | `queryId, reason` |
| [evaluation:254983-254998](../../../../../reference/runtime/sand-eval-runner.cjs#L254983-L254998) | `FunctionExpression` | no | `queryId, reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475759-475774](../../../../../reference/runtime/host-main.cjs#L475759-L475774) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254983-254998](../../../../../reference/runtime/sand-eval-runner.cjs#L254983-L254998) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475759

Calls written directly in this body: `new ConnectScmRequestResponse`, `new ConnectScmRequestResponse_Rejected`, `new InteractionResponse`.

SHA-256 of the source span: `97a1b6353b31f5152e62e93533d4b3a94e14e6049059916d2e11a95314a5a0cc`.

### evaluation:254983

Calls written directly in this body: `new ConnectScmRequestResponse`, `new ConnectScmRequestResponse_Rejected`, `new InteractionResponse`.

SHA-256 of the source span: `97a1b6353b31f5152e62e93533d4b3a94e14e6049059916d2e11a95314a5a0cc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
