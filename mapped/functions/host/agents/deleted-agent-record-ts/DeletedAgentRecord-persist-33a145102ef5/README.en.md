# `_DeletedAgentRecord.persist`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/deleted-agent-record.ts` · [Module README](../../../../../modules/host/agents/deleted-agent-record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478826-478830](../../../../../../reference/runtime/host-main.cjs#L478826-L478830) | `method` | no | `next` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478826-478830](../../../../../../reference/runtime/host-main.cjs#L478826-L478830) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:478826

Calls written directly in this body: `this.agents.clear`, `this.agents.set`, `this.flush`.

SHA-256 of the source span: `4ec4a3c1641c520d1270328da636fa22134376317857bcd6ecccc215f694f821`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
