# `teamIdsWhereOnlyAdminsMayPublish`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/skill-publish.ts` · [Module README](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702082-702090](../../../../../../../reference/runtime/host-main.cjs#L702082-L702090) | `FunctionDeclaration` | no | `memberPublishSettings` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702082-702090](../../../../../../../reference/runtime/host-main.cjs#L702082-L702090) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:702082

Calls written directly in this body: `adminOnly.add`, `new Set`.

SHA-256 of the source span: `6d3a3b0c34402a5413c21f03736df28647944d74053dde03bb1c9944487abff8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
