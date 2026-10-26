# `plannedCloudAgentArtifactFiles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-artifact-plan.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-artifact-plan-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508305-508313](../../../../../../../reference/runtime/host-main.cjs#L508305-L508313) | `FunctionDeclaration` | no | `bcId, planned` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508305-508313](../../../../../../../reference/runtime/host-main.cjs#L508305-L508313) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:508305

Calls written directly in this body: `cloudAgentArtifactsBoxDir`, `planned.map`.

SHA-256 of the source span: `9c3d59155c80a71f130df912d1306b55ccc0fce267d8fdec1d1e97de86a6fee0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
