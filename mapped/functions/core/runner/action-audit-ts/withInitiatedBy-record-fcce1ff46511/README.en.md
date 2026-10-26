# `withInitiatedBy/record`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit.ts` · [Module README](../../../../../modules/core/runner/action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:484768-484771](../../../../../../reference/runtime/sand-eval-runner.cjs#L484768-L484771) | `FunctionExpression` | no | `record4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484768-484771](../../../../../../reference/runtime/sand-eval-runner.cjs#L484768-L484771) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:484768

Calls written directly in this body: `auditor.record`, `initiatedBy`.

SHA-256 of the source span: `7efa94cb68b829ca75c978e2210f0138c27851604a029e8a063600c31538457f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
