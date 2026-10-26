# `planCloudAgentArtifacts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-artifact-plan.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-artifact-plan-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508271-508304](../../../../../../../reference/runtime/host-main.cjs#L508271-L508304) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508271-508304](../../../../../../../reference/runtime/host-main.cjs#L508271-L508304) | 6 | 1 | 0 | 1 | 0 | 0 |

### host:508271

Calls written directly in this body: `.filter`, `citedCloudAgentArtifacts`, `cloudAgentArtifactBoxPath`, `isPublishPreviewArtifact`, `newestPublishPreviewArtifacts`, `planned.push`, `skipped2.push`.

Assignment or increment targets: `plannedBytes`, `plannedCited`.

SHA-256 of the source span: `66e0ff9c0f0c9e481bf484e5592e2ff8f756030d440d1c6034b441660a2aef93`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
