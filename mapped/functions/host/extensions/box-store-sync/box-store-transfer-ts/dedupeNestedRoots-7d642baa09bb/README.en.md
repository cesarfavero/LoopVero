# `dedupeNestedRoots`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-transfer.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479917-479922](../../../../../../../reference/runtime/host-main.cjs#L479917-L479922) | `FunctionDeclaration` | no | `roots` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479917-479922](../../../../../../../reference/runtime/host-main.cjs#L479917-L479922) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:479917

Calls written directly in this body: `new Set`, `unique.filter`.

SHA-256 of the source span: `8eda350324cded8f0a0db70bf0d79c2ea948ea549981bc3a928d850d0f67a014`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
