# `createBackgroundWatches/cancelCloudAgentWatches`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work.ts` · [Module README](../../../../../modules/core/runner/background-work-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490717-490720](../../../../../../reference/runtime/sand-eval-runner.cjs#L490717-L490720) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490717-490720](../../../../../../reference/runtime/sand-eval-runner.cjs#L490717-L490720) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:490717

Calls written directly in this body: `cloudAgentSettlements.clear`, `watchedCloudAgentBcIds.clear`.

SHA-256 of the source span: `4a810188ced15644fe1c7f3d54d038be1b581b3581a403f33680ea09a6214f6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
