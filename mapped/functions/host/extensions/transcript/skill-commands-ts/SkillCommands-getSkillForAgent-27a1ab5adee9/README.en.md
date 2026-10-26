# `SkillCommands.getSkillForAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/skill-commands.ts` · [Module README](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740359-740365](../../../../../../../reference/runtime/host-main.cjs#L740359-L740365) | `method` | yes | `agentId, workflowId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740359-740365](../../../../../../../reference/runtime/host-main.cjs#L740359-L740365) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:740359

Calls written directly in this body: `active.skills.get`, `this.tm.sessionStore.getAgentSkill`.

SHA-256 of the source span: `c1b2809842bf4d35f4dfc278757490484c55bd548b70db88a6e4f6e8d5c4dc70`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
