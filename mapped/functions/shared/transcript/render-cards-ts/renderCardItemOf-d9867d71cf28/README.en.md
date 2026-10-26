# `renderCardItemOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/render-cards.ts` · [Module README](../../../../../modules/shared/transcript/render-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707869-707888](../../../../../../reference/runtime/host-main.cjs#L707869-L707888) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707869-707888](../../../../../../reference/runtime/host-main.cjs#L707869-L707888) | 7 | 0 | 0 | 6 | 0 | 0 |

### host:707869

Calls written directly in this body: `Array.isArray`, `isPlaceList`, `isUnknownRecord2`, `places.some`, `raw.map`, `shipmentCardOf`, `shoppingCardOf`.

SHA-256 of the source span: `d1e90acbcef7d8d6356ae2b32da7a86fc1ace4e2133355125c297b3ed24dc80a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
