# `SandAgentDb.setStaleRootCleanupVersion`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718642-718644](../../../../../../../reference/runtime/host-main.cjs#L718642-L718644) | `method` | no | `version4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718642-718644](../../../../../../../reference/runtime/host-main.cjs#L718642-L718644) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:718642

Calls written directly in this body: `String`, `this.writeKv`.

SHA-256 of the source span: `98b1144f356cdb447c4f021f88b4f7be9c01f761b342b87b9aa04a279dc2aa63`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
