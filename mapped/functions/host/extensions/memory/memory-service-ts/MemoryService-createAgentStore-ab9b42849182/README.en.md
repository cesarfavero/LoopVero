# `MemoryService.createAgentStore`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `host/extensions/memory/memory-service.ts` · [Module README](../../../../../../modules/host/extensions/memory/memory-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702992-702994](../../../../../../../reference/runtime/host-main.cjs#L702992-L702994) | `method` | no | `agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702992-702994](../../../../../../../reference/runtime/host-main.cjs#L702992-L702994) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:702992

Calls written directly in this body: `getAgentMemoryDir`, `new FileMemoryStore`.

SHA-256 of the source span: `b1d454e6a1a13209d941d9a7de768fe727a5185b0a1f571bec0f3d75eec5cbde`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
