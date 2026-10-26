# `createBackgroundWatches/handleShellWorkRegistered`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work.ts` · [Module README](../../../../../modules/core/runner/background-work-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490520-490533](../../../../../../reference/runtime/sand-eval-runner.cjs#L490520-L490533) | `ArrowFunctionExpression` | no | `record4, provenance` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490520-490533](../../../../../../reference/runtime/sand-eval-runner.cjs#L490520-L490533) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:490520

Calls written directly in this body: `asyncTaskFallbackLabel`, `cancelShellRewatch`, `decodeBackgroundWorkMetadata`, `definedProvenance`, `host.getConversationId`, `host.pendingWakeArmedHandler`.

SHA-256 of the source span: `ea9e8b59afdbe6fb8c33e14ea4d773a08fd6d5dd13a17ce7b829c4fbe5085f15`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
