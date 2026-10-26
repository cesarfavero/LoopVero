# `sanitizePromptSessionUsage/getExecutor/onResolvedModelId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-state.ts` · [Module README](../../../../../modules/core/runner/conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529646-529655](../../../../../../reference/runtime/sand-eval-runner.cjs#L529646-L529655) | `ArrowFunctionExpression` | no | `modelId, response, usage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529646-529655](../../../../../../reference/runtime/sand-eval-runner.cjs#L529646-L529655) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529646

Calls written directly in this body: `onResolvedModelId`, `session.getModelId`, `toSafeTokenCount2`.

Assignment or increment targets: `earlyCompaction`, `resolvedModelId`.

SHA-256 of the source span: `597c913a3daf9691c1bf0534dd9e4773d1c59d801047938a9e9c13a301a24d70`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
