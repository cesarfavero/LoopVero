# `readDeletedAgents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/deleted-agent-record.ts` · [Module README](../../../../../modules/host/agents/deleted-agent-record-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478728-478752](../../../../../../reference/runtime/host-main.cjs#L478728-L478752) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478728-478752](../../../../../../reference/runtime/host-main.cjs#L478728-L478752) | 7 | 1 | 0 | 7 | 0 | 1 |

### host:478728

Calls written directly in this body: `Object.entries`, `agents.set`, `attemptSync`, `errorMessage`, `findSystemErrno`, `isUnknownRecord2`, `new Map`, `parseAgentId`, `parseDeletedAgent`, `readSandDataFileIfPresentSync`.

Assignment or increment targets: `malformed`, `raw`.

SHA-256 of the source span: `6d89e41d3d06969e688dbb04c48372d7f0623a7fe17e010fdc403daac86f7ec5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
