# `SkillCommands.deleteAgentWorkflow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/skill-commands.ts` · [Module README](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740316-740325](../../../../../../../reference/runtime/host-main.cjs#L740316-L740325) | `method` | yes | `agentId, workflowId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740316-740325](../../../../../../../reference/runtime/host-main.cjs#L740316-L740325) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740316

Calls written directly in this body: `this.enqueueSkillMutation`.

SHA-256 of the source span: `e9feb4622cdd0f7a1a306607f1b712e7911cb75d6c1e28eb58968d887db4bcbe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
