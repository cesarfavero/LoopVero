# `IdleDestroyingHttpAgent.createConnection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/idle-destroying-agent.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/idle-destroying-agent-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714137-714139](../../../../../../../reference/runtime/host-main.cjs#L714137-L714139) | `method` | no | `options2, callback` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714137-714139](../../../../../../../reference/runtime/host-main.cjs#L714137-L714139) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:714137

Calls written directly in this body: `destroyOnIdle`, `super.createConnection`.

SHA-256 of the source span: `d0183714526f95e4575d831998dba2124ae68e9e75c7db1bd992451b716685c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
