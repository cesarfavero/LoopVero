# `SandAgentSessionStore.disconnectChannel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723693-723703](../../../../../../../reference/runtime/host-main.cjs#L723693-L723703) | `method` | no | `agentId, platform2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723693-723703](../../../../../../../reference/runtime/host-main.cjs#L723693-L723703) | 1 | 0 | 0 | 1 | 1 | 1 |

### host:723693

Calls written directly in this body: `channels.remove`, `channels.writeMetadata`, `this.connectorSecrets.removeAgentPlatform`, `this.openChannelStore`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `433d84c11b5573c76c8dda27f2ddd9e10781236e617c73687630ff63e2ed4b55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
