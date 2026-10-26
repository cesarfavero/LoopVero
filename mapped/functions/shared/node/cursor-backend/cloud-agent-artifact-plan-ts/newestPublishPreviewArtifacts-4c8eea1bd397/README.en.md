# `newestPublishPreviewArtifacts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-artifact-plan.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-artifact-plan-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508268-508270](../../../../../../../reference/runtime/host-main.cjs#L508268-L508270) | `FunctionDeclaration` | no | `artifacts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508268-508270](../../../../../../../reference/runtime/host-main.cjs#L508268-L508270) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:508268

Calls written directly in this body: `.slice`, `.sort`, `artifacts.filter`.

SHA-256 of the source span: `add2ea3b905b92f9ed5150860f2c28404105bae401e68ca1a4a652d776298fc2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
