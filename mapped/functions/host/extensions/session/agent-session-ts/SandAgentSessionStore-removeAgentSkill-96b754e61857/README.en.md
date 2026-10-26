# `SandAgentSessionStore.removeAgentSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723617-723621](../../../../../../../reference/runtime/host-main.cjs#L723617-L723621) | `method` | no | `agentId, workflowId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723617-723621](../../../../../../../reference/runtime/host-main.cjs#L723617-L723621) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:723617

Calls written directly in this body: `limitSurfacedSkills`, `store.listAll`, `store.remove`, `this.skillStoreFor`.

SHA-256 of the source span: `e467e50e7994aca2a692b129084d17dc63859dbd965c1613369349f28a88b302`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
