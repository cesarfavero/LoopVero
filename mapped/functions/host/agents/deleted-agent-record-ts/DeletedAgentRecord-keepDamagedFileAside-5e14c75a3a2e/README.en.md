# `_DeletedAgentRecord.keepDamagedFileAside`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/deleted-agent-record.ts` · [Module README](../../../../../modules/host/agents/deleted-agent-record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478801-478822](../../../../../../reference/runtime/host-main.cjs#L478801-L478822) | `method` | no | `damage, log5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478801-478822](../../../../../../reference/runtime/host-main.cjs#L478801-L478822) | 1 | 0 | 0 | 2 | 0 | 2 |

### host:478801

Calls written directly in this body: `Date.now`, `errorMessage`, `log5`, `this.flush`.

SHA-256 of the source span: `3eefe46c643f715415ef974f77bebf16acb2b9d5435b29236d6c177cc0c242a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
