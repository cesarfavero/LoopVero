# `summary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475948-475955](../../../../../reference/runtime/host-main.cjs#L475948-L475955) | `FunctionExpression` | no | `summary` |
| [evaluation:255258-255265](../../../../../reference/runtime/sand-eval-runner.cjs#L255258-L255265) | `FunctionExpression` | no | `summary` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475948-475955](../../../../../reference/runtime/host-main.cjs#L475948-L475955) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255258-255265](../../../../../reference/runtime/sand-eval-runner.cjs#L255258-L255265) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475948

Calls written directly in this body: `new InteractionUpdate`, `new SummaryUpdate`.

SHA-256 of the source span: `06a5b16830b54ab55a70e07629c154b6991c8995aa39ec1e019f87f91a557799`.

### evaluation:255258

Calls written directly in this body: `new InteractionUpdate`, `new SummaryUpdate`.

SHA-256 of the source span: `06a5b16830b54ab55a70e07629c154b6991c8995aa39ec1e019f87f91a557799`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
