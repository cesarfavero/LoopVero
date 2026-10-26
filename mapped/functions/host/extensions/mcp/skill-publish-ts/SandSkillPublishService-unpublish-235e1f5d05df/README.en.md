# `SandSkillPublishService.unpublish`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/skill-publish.ts` · [Module README](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702203-702212](../../../../../../../reference/runtime/host-main.cjs#L702203-L702212) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702203-702212](../../../../../../../reference/runtime/host-main.cjs#L702203-L702212) | 0 | 0 | 3 | 1 | 0 | 0 |

### host:702203

Calls written directly in this body: `BigInt`, `new UnpublishPluginRequest`, `this.options.client.unpublishPlugin`, `this.requirePublishedPluginSkill`, `this.restoreToLibrary`, `this.syncBestEffort`.

SHA-256 of the source span: `825d1fa6e27eafa34f01019b5d351ad31503d526f05208ca50cf84a03e9a8e96`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
