# `SandAgentDb.compareAndSetLatestRootBlobId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718450-718467](../../../../../../../reference/runtime/host-main.cjs#L718450-L718467) | `method` | no | `{     expectedRoot,     nextRoot   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718450-718467](../../../../../../../reference/runtime/host-main.cjs#L718450-L718467) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:718450

Calls written directly in this body: `agentMetadataSerde.deserialize`, `fromHex`, `this.readKv`, `this.runWrite`, `this.serializeMetadata`, `toHex3`.

SHA-256 of the source span: `8c9374811390539f67b1947eed0c79abbd4ee3a7bd869a9d8e4d2bf04c33032e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
