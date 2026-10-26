# `SandAgentSessionStore.setSessionDraftingDisabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723489-723493](../../../../../../../reference/runtime/host-main.cjs#L723489-L723493) | `method` | no | `agentId, isDisabled` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723489-723493](../../../../../../../reference/runtime/host-main.cjs#L723489-L723493) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:723489

Calls written directly in this body: `getSandSettingsPath`, `this.getAgentDir`, `writeSandSettingsFile`.

SHA-256 of the source span: `da34dd7d9ae0136cc1786dce8d2ed2de46e8463c1482d7a6a8273621201f10ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
