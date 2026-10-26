# `runSandAutoReviewFlow/recordRuleRefusalTheToolReportsAsText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-auto-review-flow.ts` · [Module README](../../../../../modules/core/runner/sand-auto-review-flow-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762117-762123](../../../../../../reference/runtime/host-main.cjs#L762117-L762123) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:554727-554733](../../../../../../reference/runtime/sand-eval-runner.cjs#L554727-L554733) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762117-762123](../../../../../../reference/runtime/host-main.cjs#L762117-L762123) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:554727-554733](../../../../../../reference/runtime/sand-eval-runner.cjs#L554727-L554733) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:762117

Calls written directly in this body: `options2.toolDecisions.decide`.

SHA-256 of the source span: `bf7f3c22fcea17a46427f317cbd8696602c5b36259af8a02923ac55c117c9699`.

### evaluation:554727

Calls written directly in this body: `options2.toolDecisions.decide`.

SHA-256 of the source span: `bf7f3c22fcea17a46427f317cbd8696602c5b36259af8a02923ac55c117c9699`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
