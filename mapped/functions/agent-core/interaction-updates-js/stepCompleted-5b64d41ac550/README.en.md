# `stepCompleted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476028-476038](../../../../../reference/runtime/host-main.cjs#L476028-L476038) | `FunctionExpression` | no | `stepId, stepDurationMs` |
| [evaluation:255338-255348](../../../../../reference/runtime/sand-eval-runner.cjs#L255338-L255348) | `FunctionExpression` | no | `stepId, stepDurationMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476028-476038](../../../../../reference/runtime/host-main.cjs#L476028-L476038) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255338-255348](../../../../../reference/runtime/sand-eval-runner.cjs#L255338-L255348) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476028

Calls written directly in this body: `BigInt`, `new InteractionUpdate`, `new StepCompletedUpdate`.

SHA-256 of the source span: `2818d2a3a6f6e4ea1cb36c618c925798ddd08f0a4f6d01caf46b4665cf205cf4`.

### evaluation:255338

Calls written directly in this body: `BigInt`, `new InteractionUpdate`, `new StepCompletedUpdate`.

SHA-256 of the source span: `2818d2a3a6f6e4ea1cb36c618c925798ddd08f0a4f6d01caf46b4665cf205cf4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
