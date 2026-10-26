# `threadLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-project-view.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-project-view-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566347-566354](../../../../../../reference/runtime/sand-eval-runner.cjs#L566347-L566354) | `FunctionDeclaration` | no | `thread, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566347-566354](../../../../../../reference/runtime/sand-eval-runner.cjs#L566347-L566354) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:566347

Calls written directly in this body: `activityWords`, `bits.join`, `bits.push`, `thread.name.trim`.

SHA-256 of the source span: `3edcab4548a9bd8125cc8684893897de465ee3471ded9e8741378de8209ddfa0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
