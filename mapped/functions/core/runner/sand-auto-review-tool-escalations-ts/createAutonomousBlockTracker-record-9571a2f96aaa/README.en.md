# `createAutonomousBlockTracker/record`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-tool-escalations.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-tool-escalations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583531-583535](../../../../../../reference/runtime/sand-eval-runner.cjs#L583531-L583535) | `ArrowFunctionExpression` | no | `fingerprint, block` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583531-583535](../../../../../../reference/runtime/sand-eval-runner.cjs#L583531-L583535) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:583531

Calls written directly in this body: `blocks.set`, `truthfulAutoReviewOutcomes`.

SHA-256 of the source span: `819595c7efc37245e88f6954fe518ef0041ed94f41ff8e11d6002ebf2dca6f71`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
