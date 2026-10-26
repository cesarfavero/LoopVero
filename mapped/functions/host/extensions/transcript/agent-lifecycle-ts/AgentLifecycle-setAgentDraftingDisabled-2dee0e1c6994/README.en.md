# `AgentLifecycle.setAgentDraftingDisabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733822-733824](../../../../../../../reference/runtime/host-main.cjs#L733822-L733824) | `method` | yes | `agentId, isDisabled` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733822-733824](../../../../../../../reference/runtime/host-main.cjs#L733822-L733824) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:733822

Calls written directly in this body: `this.tm.sessionStore.setSessionDraftingDisabled`.

SHA-256 of the source span: `785773d8a7f429cfcde38024791aedc1c527c5c4e03190e1f95abcb4c5c8d89c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
