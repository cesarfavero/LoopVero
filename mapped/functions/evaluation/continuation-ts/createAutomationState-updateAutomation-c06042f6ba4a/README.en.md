# `createAutomationState/updateAutomation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/continuation.ts` · [Module README](../../../../modules/evaluation/continuation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628701-628715](../../../../../reference/runtime/sand-eval-runner.cjs#L628701-L628715) | `FunctionExpression` | yes | `{       id,       spec,       provenance     }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628701-628715](../../../../../reference/runtime/sand-eval-runner.cjs#L628701-L628715) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:628701

Calls written directly in this body: `automationWriteOutcome`, `hasCronTrigger`, `now`, `stampScenarioMtime`, `stateWriteFailed`, `store.update`.

SHA-256 of the source span: `ae8fda8a9997e306eb932ab469c2dfc28537e4cf34f8caed90fac4ee71cdfe4b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
