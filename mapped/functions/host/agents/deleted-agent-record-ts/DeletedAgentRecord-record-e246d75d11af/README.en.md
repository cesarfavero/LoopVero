# `_DeletedAgentRecord.record`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/deleted-agent-record.ts` · [Module README](../../../../../modules/host/agents/deleted-agent-record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478775-478779](../../../../../../reference/runtime/host-main.cjs#L478775-L478779) | `method` | no | `agentId, serverId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478775-478779](../../../../../../reference/runtime/host-main.cjs#L478775-L478779) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:478775

Calls written directly in this body: `this.agents.get`, `this.write`.

SHA-256 of the source span: `b7ae82b679de9882c77a88b8606b8f9f3ed0264f5f452571abea45d5ffdc31f7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
