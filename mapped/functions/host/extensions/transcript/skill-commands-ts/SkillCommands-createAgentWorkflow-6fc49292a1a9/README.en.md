# `SkillCommands.createAgentWorkflow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/skill-commands.ts` · [Module README](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740296-740305](../../../../../../../reference/runtime/host-main.cjs#L740296-L740305) | `method` | yes | `agentId, spec` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740296-740305](../../../../../../../reference/runtime/host-main.cjs#L740296-L740305) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740296

Calls written directly in this body: `this.enqueueSkillMutation`.

SHA-256 of the source span: `bd55b5d8f8ef0acfd70cc01e065a8f2e73d359ac5743e86e4d1092fd570b1f91`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
