# `isPublishPreviewArtifact`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-artifact-plan.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-artifact-plan-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508260-508262](../../../../../../../reference/runtime/host-main.cjs#L508260-L508262) | `FunctionDeclaration` | no | `artifact` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508260-508262](../../../../../../../reference/runtime/host-main.cjs#L508260-L508262) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:508260

Calls written directly in this body: `artifact.path.startsWith`.

SHA-256 of the source span: `b6388881f94c1dbbf958858a30bf35b965e2043fa8bf33bcc8da980e60b73786`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
