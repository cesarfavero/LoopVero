# `SkillCommands.getAgentWorkflows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/skill-commands.ts` · [Module README](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740289-740295](../../../../../../../reference/runtime/host-main.cjs#L740289-L740295) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740289-740295](../../../../../../../reference/runtime/host-main.cjs#L740289-L740295) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:740289

Calls written directly in this body: `active.skills.listAll`, `limitSurfacedSkills`, `this.tm.sessionStore.listAgentSkills`.

SHA-256 of the source span: `27df237c1d8cdc0d886cb80975d6497066ca73924e3e167c17ad09456ff7e74e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
