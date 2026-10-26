# `threadStoreBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:641260-641277](../../../../../../reference/runtime/host-main.cjs#L641260-L641277) | `FunctionDeclaration` | no | `{ workerFileLinksEnabled, trackedTasks }` |
| [evaluation:431873-431890](../../../../../../reference/runtime/sand-eval-runner.cjs#L431873-L431890) | `FunctionDeclaration` | no | `{ workerFileLinksEnabled, trackedTasks }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641260-641277](../../../../../../reference/runtime/host-main.cjs#L641260-L641277) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431873-431890](../../../../../../reference/runtime/sand-eval-runner.cjs#L431873-L431890) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:641260

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `edc407a9c8608a19bf8ed63d6a6bf299337b0b805b9c1739274ad9a149766d63`.

### evaluation:431873

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `edc407a9c8608a19bf8ed63d6a6bf299337b0b805b9c1739274ad9a149766d63`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
