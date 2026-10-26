# `FileMemoryStore.profileFacts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `host/extensions/memory/memory-service.ts` · [Module README](../../../../../../modules/host/extensions/memory/memory-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702909-702911](../../../../../../../reference/runtime/host-main.cjs#L702909-L702911) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702909-702911](../../../../../../../reference/runtime/host-main.cjs#L702909-L702911) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:702909

Calls written directly in this body: `parseFacts`, `this.read`.

SHA-256 of the source span: `527144696e6bf93e8e01e6dc638ddd4ae3d729df3f30a52aa2aec31744a40614`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
