# `FileMemoryStore.removeMemoryByContent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `host/extensions/memory/memory-service.ts` · [Module README](../../../../../../modules/host/extensions/memory/memory-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702971-702975](../../../../../../../reference/runtime/host-main.cjs#L702971-L702975) | `method` | no | `content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702971-702975](../../../../../../../reference/runtime/host-main.cjs#L702971-L702975) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:702971

Calls written directly in this body: `memoryIdFor`, `normalizeMemoryContent`, `this.removeMemory`.

SHA-256 of the source span: `eb9269c7b9d88d059ce5c90567860906d3da7ed277ae19077c4fd9b87686c4f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
