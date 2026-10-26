# `composeRunnerActionAudit/withLedgers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/runner-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/runner-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490045-490052](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490045-L490052) | `ArrowFunctionExpression` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490045-490052](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490045-L490052) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490045

Calls written directly in this body: `.with`, `ledgered.with`, `withDecisionLedger`.

SHA-256 of the source span: `b3a54e9d170754f9982db9e504010b12e5ad9574525d6ec5c5034f2ce623b7dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
