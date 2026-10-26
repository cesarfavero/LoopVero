# `summaryStarted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475956-475963](../../../../../reference/runtime/host-main.cjs#L475956-L475963) | `FunctionExpression` | no | `(none)` |
| [evaluation:255266-255273](../../../../../reference/runtime/sand-eval-runner.cjs#L255266-L255273) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475956-475963](../../../../../reference/runtime/host-main.cjs#L475956-L475963) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255266-255273](../../../../../reference/runtime/sand-eval-runner.cjs#L255266-L255273) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475956

Calls written directly in this body: `new InteractionUpdate`, `new SummaryStartedUpdate`.

SHA-256 of the source span: `1b3a3db8d84251ee5d378648b09ccbaa576bd6a5f41a1e49039feeb71babcd61`.

### evaluation:255266

Calls written directly in this body: `new InteractionUpdate`, `new SummaryStartedUpdate`.

SHA-256 of the source span: `1b3a3db8d84251ee5d378648b09ccbaa576bd6a5f41a1e49039feeb71babcd61`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
