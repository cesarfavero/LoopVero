# `summaryCompleted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475972-475979](../../../../../reference/runtime/host-main.cjs#L475972-L475979) | `FunctionExpression` | no | `hookMessage, failed2` |
| [evaluation:255282-255289](../../../../../reference/runtime/sand-eval-runner.cjs#L255282-L255289) | `FunctionExpression` | no | `hookMessage, failed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475972-475979](../../../../../reference/runtime/host-main.cjs#L475972-L475979) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255282-255289](../../../../../reference/runtime/sand-eval-runner.cjs#L255282-L255289) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475972

Calls written directly in this body: `new InteractionUpdate`, `new SummaryCompletedUpdate`.

SHA-256 of the source span: `bcdcc09073602c785ce542c63a0de5e49245a5d5b3e6e073db9542fcb5822657`.

### evaluation:255282

Calls written directly in this body: `new InteractionUpdate`, `new SummaryCompletedUpdate`.

SHA-256 of the source span: `29c14c5d724ba96e31ad44ce81b260f377c039db77b793eb70a784b5432cdf63`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
