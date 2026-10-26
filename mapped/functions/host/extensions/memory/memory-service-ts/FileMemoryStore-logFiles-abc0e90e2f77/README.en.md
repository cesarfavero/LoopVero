# `FileMemoryStore.logFiles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `host/extensions/memory/memory-service.ts` · [Module README](../../../../../../modules/host/extensions/memory/memory-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702895-702904](../../../../../../../reference/runtime/host-main.cjs#L702895-L702904) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702895-702904](../../../../../../../reference/runtime/host-main.cjs#L702895-L702904) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:702895

Calls written directly in this body: `.map`, `.sort`, `names3.filter`, `reportFallbackUnlessAbsent`.

Assignment or increment targets: `names3`.

SHA-256 of the source span: `88dfa159a6da9f84f261f6f71ae2f32ee5dc676666ae201faa8636c03fe70d0b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
