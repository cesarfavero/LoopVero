# `AgentLifecycle.forgetAgentDeletion`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733619-733621](../../../../../../../reference/runtime/host-main.cjs#L733619-L733621) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733619-733621](../../../../../../../reference/runtime/host-main.cjs#L733619-L733621) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:733619

Calls written directly in this body: `this.tm.sessions.deletedAgentIds.delete`.

SHA-256 of the source span: `38d727d92ffc00d8414ccf01b70faf5d8defe07f5b0a201baa4e8fe7f1b7bc2a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
