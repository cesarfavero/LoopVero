# `SkillCommands.enqueueSkillMutation/mutation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/skill-commands.ts` · [Module README](../../../../../../modules/host/extensions/transcript/skill-commands-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740241-740265](../../../../../../../reference/runtime/host-main.cjs#L740241-L740265) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740241-740265](../../../../../../../reference/runtime/host-main.cjs#L740241-L740265) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:740241

Calls written directly in this body: `activeMutation`, `inactiveMutation`, `this.tm.automationRuntime.recordAutomationChangeEvents`, `this.tm.automationRuntime.recordInactiveAutomationChanges`, `this.tm.sessionStore.listAgentAutomations`.

SHA-256 of the source span: `c0ae11cc43aa83be8a5c4aba6190dae69806359b975f13f2d7947720e0dce3a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
