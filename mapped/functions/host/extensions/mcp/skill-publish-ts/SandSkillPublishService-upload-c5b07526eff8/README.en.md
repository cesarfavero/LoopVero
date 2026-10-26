# `SandSkillPublishService.upload`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/skill-publish.ts` · [Module README](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702247-702295](../../../../../../../reference/runtime/host-main.cjs#L702247-L702295) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702247-702295](../../../../../../../reference/runtime/host-main.cjs#L702247-L702295) | 2 | 0 | 7 | 1 | 1 | 1 |

### host:702247

Calls written directly in this body: `args.description.trim`, `errorLogTag`, `errorMessage`, `new PublishPluginRequest`, `new SandSkillPublishError`, `new Uint8Array`, `packPluginArtifact`, `readManifestName`, `response.pluginId.toString`, `stageSkillDirForPublish`, `synthesizeSkillPluginDir`, `this.options.client.publishPlugin`, `this.options.log`, `this.options.reportEdgeFailed`.

Explicit throw targets: `SandSkillPublishError`.

SHA-256 of the source span: `f7f191d20bb190a490612d64a0df699410c71b4b61497b8b618f5879f5623582`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
