# `goalClockOnActivation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/goal-continuation.js` · [Module README](../../../../modules/agent-core/goal-continuation-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475461-475466](../../../../../reference/runtime/host-main.cjs#L475461-L475466) | `FunctionDeclaration` | no | `goalState, nowMs2` |
| [evaluation:254681-254686](../../../../../reference/runtime/sand-eval-runner.cjs#L254681-L254686) | `FunctionDeclaration` | no | `goalState, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475461-475466](../../../../../reference/runtime/host-main.cjs#L475461-L475466) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254681-254686](../../../../../reference/runtime/sand-eval-runner.cjs#L254681-L254686) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475461

Calls written directly in this body: `BigInt`.

SHA-256 of the source span: `a2c9062156af2804d0828cd0b3f86a67dbb6ec50f0792d87ce5ee41941466c21`.

### evaluation:254681

Calls written directly in this body: `BigInt`.

SHA-256 of the source span: `2c44a677398495baf8e6cadac044f4000cf1558c49141bb9db854b4085e39f2f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
