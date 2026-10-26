# `FileMemoryStore.listMemories`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `host/extensions/memory/memory-service.ts` · [Module README](../../../../../../modules/host/extensions/memory/memory-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702936-702943](../../../../../../../reference/runtime/host-main.cjs#L702936-L702943) | `method` | no | `limit3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702936-702943](../../../../../../../reference/runtime/host-main.cjs#L702936-L702943) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:702936

Calls written directly in this body: `.map`, `.slice`, `.sort`, `Math.floor`, `Number.isFinite`, `this.logFacts`, `this.profileFacts`.

SHA-256 of the source span: `dcfdfc75d3005a1d10a85732b09e943f47d47114c28c2031817c862009146b8d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
