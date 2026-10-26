# `projectThreadsRowLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-project-view.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-project-view-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566405-566409](../../../../../../reference/runtime/sand-eval-runner.cjs#L566405-L566409) | `FunctionDeclaration` | no | `summary, trees` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566405-566409](../../../../../../reference/runtime/sand-eval-runner.cjs#L566405-L566409) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:566405

Calls written directly in this body: `projectThreadsLine`, `trees.trees.get`.

SHA-256 of the source span: `a428c96f0470d730b26fd21d09bf128ffe1c39d93b2956260ca2dd91faea9f1b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
