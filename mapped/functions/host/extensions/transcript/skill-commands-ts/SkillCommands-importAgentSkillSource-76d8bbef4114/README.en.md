# `SkillCommands.importAgentSkillSource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/skill-commands.ts` · [Module README](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740340-740350](../../../../../../../reference/runtime/host-main.cjs#L740340-L740350) | `method` | yes | `agentId, source, fallbackName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740340-740350](../../../../../../../reference/runtime/host-main.cjs#L740340-L740350) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:740340

Calls written directly in this body: `active.skills.importLiveSource`, `active.skills.listAll`, `limitSurfacedSkills`, `this.tm.sessionStore.importAgentSkillSource`.

SHA-256 of the source span: `7ba6b94150504fd89353e4ea71ae33ed37af9cf37c63bdceb2a12957baf2f37d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
