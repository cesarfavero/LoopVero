# `SandAgentDb.serializeMetadata`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718424-718426](../../../../../../../reference/runtime/host-main.cjs#L718424-L718426) | `method` | no | `metadata2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718424-718426](../../../../../../../reference/runtime/host-main.cjs#L718424-L718426) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:718424

Calls written directly in this body: `agentMetadataSerde.serialize`, `toHex3`.

SHA-256 of the source span: `775a7c2f2771107fe364c4d4be0c5cfaa30617fa64fc8151b555c0796dd40f07`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
