# `readWorkerRows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-projects.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-projects-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508971-508989](../../../../../../reference/runtime/host-main.cjs#L508971-L508989) | `FunctionDeclaration` | yes | `backend, workerBcIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508971-508989](../../../../../../reference/runtime/host-main.cjs#L508971-L508989) | 1 | 2 | 1 | 1 | 0 | 0 |

### host:508971

Calls written directly in this body: `backend.listDetailedBackgroundComposers`, `new ListDetailedBackgroundComposersRequest`, `new Map`, `rows.set`, `workerBcIds.slice`.

Assignment or increment targets: `offset2`.

SHA-256 of the source span: `c9f7fd6760a19dd539b29b557a6dfe1c41a5bd84ee87b4b7d4e7f84fd8557852`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
