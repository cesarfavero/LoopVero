# `SandAgentSessionStore.listAgents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723422-723424](../../../../../../../reference/runtime/host-main.cjs#L723422-L723424) | `method` | yes | `activeAgentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723422-723424](../../../../../../../reference/runtime/host-main.cjs#L723422-L723424) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:723422

Calls written directly in this body: `listAgents`, `this.rosterHost`.

SHA-256 of the source span: `f263a90336a42d319f2d2a6ad7835f1db68d36e1e0b1f51456e670d830609ded`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
