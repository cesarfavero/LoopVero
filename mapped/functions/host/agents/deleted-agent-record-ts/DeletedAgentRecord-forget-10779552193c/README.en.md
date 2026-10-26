# `_DeletedAgentRecord.forget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/deleted-agent-record.ts` · [Module README](../../../../../modules/host/agents/deleted-agent-record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478785-478790](../../../../../../reference/runtime/host-main.cjs#L478785-L478790) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478785-478790](../../../../../../reference/runtime/host-main.cjs#L478785-L478790) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:478785

Calls written directly in this body: `new Map`, `next.delete`, `this.agents.has`, `this.persist`.

SHA-256 of the source span: `1f5e7e94b6ebbd433542e9a737c2ac7887171569e1a061591315e524f012f929`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
