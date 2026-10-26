# `AgentLifecycle.setAgentHiddenFromSidebar`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733839-733842](../../../../../../../reference/runtime/host-main.cjs#L733839-L733842) | `method` | yes | `agentId, isHidden` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733839-733842](../../../../../../../reference/runtime/host-main.cjs#L733839-L733842) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:733839

Calls written directly in this body: `this.tm.roster.emitAgentUpdate`, `this.tm.sessionStore.setSessionHiddenFromSidebar`.

SHA-256 of the source span: `e3448fd91f12960af2ad909ce98700f50158a15bdc0d3bf85fb0c5fcbce44a3c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
