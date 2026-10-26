# `SandAgentSessionStore.listAllAutomationsFrom`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723720-723746](../../../../../../../reference/runtime/host-main.cjs#L723720-L723746) | `method` | yes | `{     definitionsOnly   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723720-723746](../../../../../../../reference/runtime/host-main.cjs#L723720-L723746) | 4 | 2 | 1 | 2 | 1 | 2 |

### host:723720

Calls written directly in this body: `entry.isDirectory`, `parseAgentId`, `result.push`, `store.list`, `store.listDefinitions`, `this.automationStoreFor`.

Assignment or increment targets: `automations`, `entries`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `a8291ba412ca4cfcdb20fd1e42c78647c6ca9bec8dbd1d617e9a23cd7de64c23`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
