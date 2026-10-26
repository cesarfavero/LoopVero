# `SkillCommands.emitSkills`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/skill-commands.ts` · [Module README](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740274-740282](../../../../../../../reference/runtime/host-main.cjs#L740274-L740282) | `method` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740274-740282](../../../../../../../reference/runtime/host-main.cjs#L740274-L740282) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:740274

Calls written directly in this body: `limitSurfacedSkills`, `session.skills.listAll`, `this.tm.roster.emitter.emit`, `this.tm.shouldEmitAutomations`.

SHA-256 of the source span: `245c4bac79579fa30b90b4341c7d7ef3ee5c6ddc843cec8da2c73d0c1a1568cd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
