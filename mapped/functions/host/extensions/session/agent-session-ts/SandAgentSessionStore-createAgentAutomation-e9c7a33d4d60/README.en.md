# `SandAgentSessionStore.createAgentAutomation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723583-723587](../../../../../../../reference/runtime/host-main.cjs#L723583-L723587) | `method` | no | `agentId, spec, provenance = "user"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723583-723587](../../../../../../../reference/runtime/host-main.cjs#L723583-L723587) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723583

Calls written directly in this body: `.slice`, `store.list`, `store.upsert`, `this.automationStoreFor`.

SHA-256 of the source span: `798b1fb24258d2e9618bf89d987123683a4928e8dcf40a60d3befae3ec795287`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
