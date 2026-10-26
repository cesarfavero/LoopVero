# `sanitizePromptSessionUsage/getEarlyCompaction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-state.ts` · [Module README](../../../../../modules/core/runner/conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529628-529633](../../../../../../reference/runtime/sand-eval-runner.cjs#L529628-L529633) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529628-529633](../../../../../../reference/runtime/sand-eval-runner.cjs#L529628-L529633) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529628

Calls written directly in this body: `session.getModelId`.

Assignment or increment targets: `earlyCompaction`.

SHA-256 of the source span: `f344b824775097eea7cf43c3f65af9474d2da89b99842b1a83ff072f1a765b1e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
