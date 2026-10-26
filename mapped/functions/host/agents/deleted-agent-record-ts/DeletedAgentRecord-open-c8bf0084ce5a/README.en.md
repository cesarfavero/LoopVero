# `_DeletedAgentRecord.open`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/deleted-agent-record.ts` · [Module README](../../../../../modules/host/agents/deleted-agent-record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478760-478765](../../../../../../reference/runtime/host-main.cjs#L478760-L478765) | `method` | no | `path33, log5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478760-478765](../../../../../../reference/runtime/host-main.cjs#L478760-L478765) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:478760

Calls written directly in this body: `new _DeletedAgentRecord`, `readDeletedAgents`, `record3.keepDamagedFileAside`.

SHA-256 of the source span: `b163db850d50c065fb563696acc3d22d38dc72b9c517656ad745dc3278fb1154`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
