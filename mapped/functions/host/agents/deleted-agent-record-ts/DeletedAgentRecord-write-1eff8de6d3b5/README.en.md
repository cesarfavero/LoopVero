# `_DeletedAgentRecord.write`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/deleted-agent-record.ts` · [Module README](../../../../../modules/host/agents/deleted-agent-record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478823-478825](../../../../../../reference/runtime/host-main.cjs#L478823-L478825) | `method` | no | `agentId, agent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478823-478825](../../../../../../reference/runtime/host-main.cjs#L478823-L478825) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:478823

Calls written directly in this body: `.set`, `new Map`, `this.persist`.

SHA-256 of the source span: `16ecf6f3bc95cb3f54fbc96e008e5968d5196cc99bb82cce654716f4aaf12961`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
