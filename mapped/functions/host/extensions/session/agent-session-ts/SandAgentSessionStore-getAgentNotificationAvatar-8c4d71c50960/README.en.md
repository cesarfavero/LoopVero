# `SandAgentSessionStore.getAgentNotificationAvatar`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723287-723289](../../../../../../../reference/runtime/host-main.cjs#L723287-L723289) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723287-723289](../../../../../../../reference/runtime/host-main.cjs#L723287-L723289) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:723287

Calls written directly in this body: `getAgentNotificationAvatar`, `this.profileFilesHost`.

SHA-256 of the source span: `e7ece770284e7f0646824501a7e2311d5d966b5700d3da1fc7037a89e82de82a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
