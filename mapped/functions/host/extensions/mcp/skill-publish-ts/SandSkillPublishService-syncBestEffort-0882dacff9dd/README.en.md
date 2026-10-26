# `SandSkillPublishService.syncBestEffort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/skill-publish.ts` · [Module README](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702329-702341](../../../../../../../reference/runtime/host-main.cjs#L702329-L702341) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702329-702341](../../../../../../../reference/runtime/host-main.cjs#L702329-L702341) | 0 | 0 | 1 | 0 | 0 | 1 |

### host:702329

Calls written directly in this body: `errorLogTag`, `errorMessage`, `this.options.log`, `this.options.pluginSkills.sync`, `this.options.reportEdgeFailed`.

SHA-256 of the source span: `88e2e21ba466f52b08f4e966a74ad5601a40552e838a6b94bce262948c3a80d4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
