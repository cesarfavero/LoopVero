# `SandAgentSessionStore.automationStoreFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723569-723574](../../../../../../../reference/runtime/host-main.cjs#L723569-L723574) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723569-723574](../../../../../../../reference/runtime/host-main.cjs#L723569-L723574) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723569

Calls written directly in this body: `automationStoreForDbPath`, `getAgentDbPath`.

SHA-256 of the source span: `10c88eb6963ac6d9731e6d0aa37eadcfce747f26f25d5c27c2927b2b2e14e596`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
