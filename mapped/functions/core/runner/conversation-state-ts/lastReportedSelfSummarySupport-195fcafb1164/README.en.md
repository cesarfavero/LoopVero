# `lastReportedSelfSummarySupport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-state.ts` · [Module README](../../../../../modules/core/runner/conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529354-529356](../../../../../../reference/runtime/sand-eval-runner.cjs#L529354-L529356) | `FunctionDeclaration` | no | `modelId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529354-529356](../../../../../../reference/runtime/sand-eval-runner.cjs#L529354-L529356) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529354

Calls written directly in this body: `selfSummarySupportByModelForHostLifetime.get`.

SHA-256 of the source span: `fc73fa94fb624226a974083194e66cb8a59d3ccc586534ef259b7674dbd42cef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
