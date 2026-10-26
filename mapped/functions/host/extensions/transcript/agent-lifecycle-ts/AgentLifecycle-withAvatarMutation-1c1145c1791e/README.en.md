# `AgentLifecycle.withAvatarMutation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/agent-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/agent-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733452-733468](../../../../../../../reference/runtime/host-main.cjs#L733452-L733468) | `method` | yes | `agentId, run` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733452-733468](../../../../../../../reference/runtime/host-main.cjs#L733452-L733468) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:733452

Calls written directly in this body: `Promise.resolve`, `new Promise`, `release`, `run`, `this.avatarMutationMutexes.delete`, `this.avatarMutationMutexes.get`, `this.avatarMutationMutexes.set`.

SHA-256 of the source span: `1271af4b85d38aa5690eea54aafa5a340354c35f655ce2486584527f81fff295`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
