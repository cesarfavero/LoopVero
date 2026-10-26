# `isBoxStorePackBuildEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-pack.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-pack-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478698-478701](../../../../../../../reference/runtime/host-main.cjs#L478698-L478701) | `FunctionDeclaration` | no | `env` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478698-478701](../../../../../../../reference/runtime/host-main.cjs#L478698-L478701) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:478698

Calls written directly in this body: `.toLowerCase`, `env.SAND_BOX_STORE_PACKS.trim`.

SHA-256 of the source span: `d0dd07e7459a2a8d090017917ed20c2af0ae329583a45c4e9124f0e3f3a93ca3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
