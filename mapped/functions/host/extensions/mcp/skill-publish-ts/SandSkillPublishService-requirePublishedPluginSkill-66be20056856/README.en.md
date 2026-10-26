# `SandSkillPublishService.requirePublishedPluginSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/skill-publish.ts` · [Module README](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702313-702328](../../../../../../../reference/runtime/host-main.cjs#L702313-L702328) | `method` | no | `workflowId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702313-702328](../../../../../../../reference/runtime/host-main.cjs#L702313-L702328) | 3 | 0 | 0 | 1 | 3 | 0 |

### host:702313

Calls written directly in this body: `index.skills.find`, `new SandSkillPublishError`, `this.options.pluginSkills.currentIndex`.

Explicit throw targets: `SandSkillPublishError`.

SHA-256 of the source span: `100204cd3f60199517377127f509e094e7f273a781388b57a101ba1061f07d79`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
