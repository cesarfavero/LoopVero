# `SandAgentSessionStore.getSessionOutline`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723428-723430](../../../../../../../reference/runtime/host-main.cjs#L723428-L723430) | `method` | yes | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723428-723430](../../../../../../../reference/runtime/host-main.cjs#L723428-L723430) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:723428

Calls written directly in this body: `this.conversationState.getSessionOutline`.

SHA-256 of the source span: `bba554f79cad5042bb830d074e047078ea50de7787b34604d09a7bd85854508d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
