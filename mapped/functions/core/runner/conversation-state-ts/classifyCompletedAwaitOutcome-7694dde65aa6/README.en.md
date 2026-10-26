# `classifyCompletedAwaitOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-state.ts` · [Module README](../../../../../modules/core/runner/conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529323-529336](../../../../../../reference/runtime/sand-eval-runner.cjs#L529323-L529336) | `FunctionDeclaration` | no | `awaitCall` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529323-529336](../../../../../../reference/runtime/sand-eval-runner.cjs#L529323-L529336) | 5 | 0 | 0 | 3 | 0 | 0 |

### evaluation:529323

Calls written directly in this body: `inner.value.taskId.trim`.

SHA-256 of the source span: `e9dca6c3788dfd6849c25e28997e52ffabc78da598805a96f02c5824bc2af2ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
