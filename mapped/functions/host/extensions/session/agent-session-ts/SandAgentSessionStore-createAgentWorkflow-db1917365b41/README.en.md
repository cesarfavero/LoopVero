# `SandAgentSessionStore.createAgentWorkflow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723607-723611](../../../../../../../reference/runtime/host-main.cjs#L723607-L723611) | `method` | no | `agentId, spec` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723607-723611](../../../../../../../reference/runtime/host-main.cjs#L723607-L723611) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723607

Calls written directly in this body: `limitSurfacedSkills`, `store.create`, `store.listAll`, `this.skillStoreFor`.

SHA-256 of the source span: `04486352201ff600dac510eb80a48338598fde4a42622bb05a7df56c46d5bda6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
