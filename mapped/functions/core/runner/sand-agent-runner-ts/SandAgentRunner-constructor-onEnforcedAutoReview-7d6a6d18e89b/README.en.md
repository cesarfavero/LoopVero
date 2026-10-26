# `_SandAgentRunner.constructor/onEnforcedAutoReview`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:592828-592828](../../../../../../reference/runtime/sand-eval-runner.cjs#L592828-L592828) | `ArrowFunctionExpression` | no | `latencyMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592828-592828](../../../../../../reference/runtime/sand-eval-runner.cjs#L592828-L592828) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:592828 uses an implicit arrow-function return.

### evaluation:592828

Calls written directly in this body: `this.computerUse.recordEnforcedAutoReview`.

SHA-256 of the source span: `2a004a52e0e1b87ace86ada66070a8f02ff01d855756b71610d49c9f9ad47b63`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
