# `SandAgentSessionStore.skillStoreFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723598-723600](../../../../../../../reference/runtime/host-main.cjs#L723598-L723600) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723598-723600](../../../../../../../reference/runtime/host-main.cjs#L723598-L723600) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723598

Calls written directly in this body: `getAgentDbPath`, `skillStoreForDbPath`.

SHA-256 of the source span: `33984f4dd6aa930b991954d19368f3a2e26b845e26311682e3e46f644057bf2c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
