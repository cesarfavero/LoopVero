# `createTurnObservation/armDispatchObservation/noteModelResolved`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-observation.ts` · [Module README](../../../../../modules/core/runner/turn-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588873-588878](../../../../../../reference/runtime/sand-eval-runner.cjs#L588873-L588878) | `ArrowFunctionExpression` | no | `modelId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588873-588878](../../../../../../reference/runtime/sand-eval-runner.cjs#L588873-L588878) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:588873

Calls written directly in this body: `pending`.

Assignment or increment targets: `pendingFirstToken`, `runResolvedModelId`.

SHA-256 of the source span: `5630a2e675215ee5fa2ace3114ea83fd7e18b8da9f9c89b65cea0915d6d6391b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
