# `_DeletedAgentRecord.removeAgentDirs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/deleted-agent-record.ts` · [Module README](../../../../../modules/host/agents/deleted-agent-record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478791-478800](../../../../../../reference/runtime/host-main.cjs#L478791-L478800) | `method` | no | `agentsRootDir, log5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478791-478800](../../../../../../reference/runtime/host-main.cjs#L478791-L478800) | 1 | 1 | 0 | 0 | 0 | 1 |

### host:478791

Calls written directly in this body: `AGENT_UUID.test`, `errorMessage`, `log5`, `removeSandDataTreeSync`.

SHA-256 of the source span: `43de78b580a3db30fd2ebb9718edcf7770d18025d916d044ef3532df5b60a9fa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
