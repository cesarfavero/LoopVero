# `SandAgentDb.setAwaitingUserResponseForTab`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718590-718606](../../../../../../../reference/runtime/host-main.cjs#L718590-L718606) | `method` | no | `tabId, state, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718590-718606](../../../../../../../reference/runtime/host-main.cjs#L718590-L718606) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:718590

Calls written directly in this body: `this.getAwaitingUserResponse`, `this.setAwaitingUserResponse`.

SHA-256 of the source span: `46fb56d588b66ea9f3555accfce8fcff71e34747ce15c0eb63dc95ce4544f246`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
