# `userMessageAppended`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-updates.js` · [Module README](../../../../modules/agent-core/interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475922-475930](../../../../../reference/runtime/host-main.cjs#L475922-L475930) | `FunctionExpression` | no | `userMessage2` |
| [evaluation:255232-255240](../../../../../reference/runtime/sand-eval-runner.cjs#L255232-L255240) | `FunctionExpression` | no | `userMessage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475922-475930](../../../../../reference/runtime/host-main.cjs#L475922-L475930) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255232-255240](../../../../../reference/runtime/sand-eval-runner.cjs#L255232-L255240) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475922

Calls written directly in this body: `new InteractionUpdate`, `new UserMessageAppendedUpdate`.

SHA-256 of the source span: `3c6b0a0f3aec33dfe8c7ff4adc57fe57ad01315372a815843fc9cf528696e7e7`.

### evaluation:255232

Calls written directly in this body: `new InteractionUpdate`, `new UserMessageAppendedUpdate`.

SHA-256 of the source span: `c0cff427b21af91ef0acdd7c986c2b6062ea9803845cc8502bc8a2efe95c1d09`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
