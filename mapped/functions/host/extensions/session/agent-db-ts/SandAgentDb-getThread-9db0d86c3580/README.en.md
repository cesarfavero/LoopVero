# `SandAgentDb.getThread`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718689-718694](../../../../../../../reference/runtime/host-main.cjs#L718689-L718694) | `method` | no | `rootId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718689-718694](../../../../../../../reference/runtime/host-main.cjs#L718689-L718694) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:718689

Calls written directly in this body: `this.getBranchedEntries`, `this.getEntryById`, `threadDescendants`.

SHA-256 of the source span: `216633d26bcb0b895c3c307d8023fe4ae44c4e06281952dafe5d8465ec4a3366`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
