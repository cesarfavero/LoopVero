# `_SandEvalContinuationRuntime.projectAutomationTimes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/continuation.ts` · [Module README](../../../../modules/evaluation/continuation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628776-628784](../../../../../reference/runtime/sand-eval-runner.cjs#L628776-L628784) | `method` | no | `automations` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628776-628784](../../../../../reference/runtime/sand-eval-runner.cjs#L628776-L628784) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:628776

Calls written directly in this body: `Date.now`, `automations.map`.

SHA-256 of the source span: `e48ae1745e65fb8e4c113e8e436ef806ff615831e2a715b31c4ae312af7341a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
