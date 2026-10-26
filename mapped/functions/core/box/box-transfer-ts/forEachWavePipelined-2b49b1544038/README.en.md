# `forEachWavePipelined`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-transfer.ts` · [Module README](../../../../../modules/core/box/box-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476534-476591](../../../../../../reference/runtime/host-main.cjs#L476534-L476591) | `FunctionDeclaration` | yes | `items, opts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476534-476591](../../../../../../reference/runtime/host-main.cjs#L476534-L476591) | 1 | 0 | 1 | 0 | 1 | 0 |

### host:476534

Calls written directly in this body: `Array.from`, `Math.max`, `Promise.all`, `beginPrepareIfNeeded`.

Explicit throw targets: `failure3`.

SHA-256 of the source span: `0ca68fe7d4a91b5d90c140f55f639cbc6553bdbb85560f4682da1a271e59aef9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
