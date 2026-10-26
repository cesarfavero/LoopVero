# `sentLinks/add2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/link-checks/sent-link-checks.ts` · [Module README](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583444-583448](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583444-L583448) | `ArrowFunctionExpression` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583444-583448](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583444-L583448) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583444

Calls written directly in this body: `byKey.has`, `byKey.set`, `linkKey2`.

SHA-256 of the source span: `9035eda119faa3d2d00ecca08ac6c92866fae8d7f5bb305d619e95d3f4718c27`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
