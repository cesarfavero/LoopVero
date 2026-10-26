# `stepStarted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476005-476012](../../../../../reference/runtime/host-main.cjs#L476005-L476012) | `FunctionExpression` | no | `stepId` |
| [evaluation:255315-255322](../../../../../reference/runtime/sand-eval-runner.cjs#L255315-L255322) | `FunctionExpression` | no | `stepId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476005-476012](../../../../../reference/runtime/host-main.cjs#L476005-L476012) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255315-255322](../../../../../reference/runtime/sand-eval-runner.cjs#L255315-L255322) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476005

Calls written directly in this body: `BigInt`, `new InteractionUpdate`, `new StepStartedUpdate`.

SHA-256 of the source span: `c3f06aed6a17b4e44802ee899eb6b66421e1f335c2859b9f607d2b0010a21f95`.

### evaluation:255315

Calls written directly in this body: `BigInt`, `new InteractionUpdate`, `new StepStartedUpdate`.

SHA-256 of the source span: `c3f06aed6a17b4e44802ee899eb6b66421e1f335c2859b9f607d2b0010a21f95`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
