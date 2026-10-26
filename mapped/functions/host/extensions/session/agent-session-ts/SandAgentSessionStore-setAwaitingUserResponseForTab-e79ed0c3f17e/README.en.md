# `SandAgentSessionStore.setAwaitingUserResponseForTab`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723563-723568](../../../../../../../reference/runtime/host-main.cjs#L723563-L723568) | `method` | yes | `agentId, tabId, state, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723563-723568](../../../../../../../reference/runtime/host-main.cjs#L723563-L723568) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:723563

Calls written directly in this body: `this.withAgentDb`.

SHA-256 of the source span: `afe9842b6056e4e6e9c666d1ae52a2ef54e3400eac41505f941d156e3fee2aa7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
