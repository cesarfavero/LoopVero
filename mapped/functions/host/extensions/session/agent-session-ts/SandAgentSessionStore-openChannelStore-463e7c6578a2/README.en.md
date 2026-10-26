# `SandAgentSessionStore.openChannelStore`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723640-723642](../../../../../../../reference/runtime/host-main.cjs#L723640-L723642) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723640-723642](../../../../../../../reference/runtime/host-main.cjs#L723640-L723642) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723640

Calls written directly in this body: `channelStoreForDbPath`, `getAgentDbPath`.

SHA-256 of the source span: `f82a0e6341ed57d2b53900fee252ea007f41aab50fcc59032257ef3dc8dee4ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
