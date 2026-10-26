# `SandAgentDb.readMetadata`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718419-718423](../../../../../../../reference/runtime/host-main.cjs#L718419-L718423) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718419-718423](../../../../../../../reference/runtime/host-main.cjs#L718419-L718423) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:718419

Calls written directly in this body: `agentMetadataSerde.deserialize`, `fromHex`, `getDefaultAgentMetadata`, `this.readKv`.

SHA-256 of the source span: `5e9905ec24dd2e4c7bdff0bfeeabfb655ce46d66ba43d7b93b27a2eefdc63c27`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
