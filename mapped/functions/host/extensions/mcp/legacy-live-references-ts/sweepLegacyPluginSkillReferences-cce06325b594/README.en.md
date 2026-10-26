# `sweepLegacyPluginSkillReferences`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/legacy-live-references.ts` · [Module README](../../../../../../modules/host/extensions/mcp/legacy-live-references-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684791-684817](../../../../../../../reference/runtime/host-main.cjs#L684791-L684817) | `FunctionDeclaration` | yes | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684791-684817](../../../../../../../reference/runtime/host-main.cjs#L684791-L684817) | 2 | 0 | 1 | 3 | 0 | 1 |

### host:684791

Calls written directly in this body: `collectMaterializedSkillSourceUrls`, `deps.log`, `errorLogTag`, `fetchMarketplaceMcpPlugins`, `getPluginSkillsDir`, `marketplaceDashboardClientFor`, `readPluginSkillsCache`, `removeSkillLiveReferences`.

SHA-256 of the source span: `07c6c7d4901ceb65d192e5089aaa26ecb219c8b24e263623d8dec0de50a9739a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
