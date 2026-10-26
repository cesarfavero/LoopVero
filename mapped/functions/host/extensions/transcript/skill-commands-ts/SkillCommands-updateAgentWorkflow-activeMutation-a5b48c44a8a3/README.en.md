# `SkillCommands.updateAgentWorkflow/activeMutation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/skill-commands.ts` · [Module README](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740309-740312](../../../../../../../reference/runtime/host-main.cjs#L740309-L740312) | `ArrowFunctionExpression` | no | `active` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740309-740312](../../../../../../../reference/runtime/host-main.cjs#L740309-L740312) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740309

Calls written directly in this body: `active.skills.listAll`, `active.skills.update`, `limitSurfacedSkills`.

SHA-256 of the source span: `739c2480ca06ba57728302a23a6ad3642739eaa7eca8888af2c3107f7a9ad8da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
