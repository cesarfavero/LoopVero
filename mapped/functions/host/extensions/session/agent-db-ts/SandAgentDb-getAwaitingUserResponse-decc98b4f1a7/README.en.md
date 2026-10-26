# `SandAgentDb.getAwaitingUserResponse`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718581-718583](../../../../../../../reference/runtime/host-main.cjs#L718581-L718583) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718581-718583](../../../../../../../reference/runtime/host-main.cjs#L718581-L718583) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:718581

Calls written directly in this body: `parseAwaitingState`, `this.readKv`.

SHA-256 of the source span: `0d84ad403740a4738da88ae9c870df1c080058bbdc95df5cc084f9ccd4f465d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
