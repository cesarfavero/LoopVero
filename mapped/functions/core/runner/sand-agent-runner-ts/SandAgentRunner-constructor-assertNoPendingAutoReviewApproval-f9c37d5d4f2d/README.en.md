# `_SandAgentRunner.constructor/assertNoPendingAutoReviewApproval`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:593497-593497](../../../../../../reference/runtime/sand-eval-runner.cjs#L593497-L593497) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593497-593497](../../../../../../reference/runtime/sand-eval-runner.cjs#L593497-L593497) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:593497 uses an implicit arrow-function return.

### evaluation:593497

Calls written directly in this body: `this.autoReviewGate.assertNoPendingApproval`.

SHA-256 of the source span: `f17e5df7d5455a7c30976a8d91e8957c701d185988318232823f9f29755b6a9c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
