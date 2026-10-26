# `AgentLifecycle.setAgentAvatarBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733843-733848](../../../../../../../reference/runtime/host-main.cjs#L733843-L733848) | `method` | yes | `agentId, pngBytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733843-733848](../../../../../../../reference/runtime/host-main.cjs#L733843-L733848) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:733843

Calls written directly in this body: `this.withAvatarMutation`.

SHA-256 of the source span: `46fe70e7fea388ae6a5d396691ac1a2c07cdc062f2f0ec3f4309a57272f9ea6a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
