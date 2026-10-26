# `entryLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-pull-requests.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-pull-requests-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566638-566641](../../../../../../reference/runtime/sand-eval-runner.cjs#L566638-L566641) | `FunctionDeclaration` | no | `entry, byId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566638-566641](../../../../../../reference/runtime/sand-eval-runner.cjs#L566638-L566641) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:566638

Calls written directly in this body: `.join`, `entry.owners.map`, `others.map`.

SHA-256 of the source span: `ca0c60271ed15a325cd5da77a6219283b2e1367952e708398e56046635e684b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
