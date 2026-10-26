# `createTurnObservation/armDispatchObservation/observeFirstToken/emitObservation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-observation.ts` · [Module README](../../../../../modules/core/runner/turn-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588846-588858](../../../../../../reference/runtime/sand-eval-runner.cjs#L588846-L588858) | `ArrowFunctionExpression` | no | `modelId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588846-588858](../../../../../../reference/runtime/sand-eval-runner.cjs#L588846-L588858) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:588846

Calls written directly in this body: `deps.resolveModelId`, `onFirstToken`.

SHA-256 of the source span: `ca52896d742882089ab8968178b4acb7b272fbae39b4a24dacddef2323c37389`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
