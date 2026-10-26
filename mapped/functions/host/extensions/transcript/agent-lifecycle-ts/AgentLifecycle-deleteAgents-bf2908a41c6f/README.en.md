# `AgentLifecycle.deleteAgents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733622-733633](../../../../../../../reference/runtime/host-main.cjs#L733622-L733633) | `method` | yes | `agentIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733622-733633](../../../../../../../reference/runtime/host-main.cjs#L733622-L733633) | 2 | 1 | 1 | 2 | 1 | 1 |

### host:733622

Calls written directly in this body: `emptyDeleteStats`, `getTranscript`, `new Set`, `this.runDeleteAgents`, `this.tm.sessionStore.agentDirExists`, `this.tm.sessions.deletedAgentIds.delete`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `383fb87fb0acd3b28aecadc99f9fc9acef1eaf3cef1922b8bc701241b935e4d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
