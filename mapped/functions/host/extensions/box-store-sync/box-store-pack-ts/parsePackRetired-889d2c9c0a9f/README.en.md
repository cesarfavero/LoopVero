# `parsePackRetired`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-pack.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-pack-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478498-478510](../../../../../../../reference/runtime/host-main.cjs#L478498-L478510) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478498-478510](../../../../../../../reference/runtime/host-main.cjs#L478498-L478510) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:478498

Calls written directly in this body: `JSON.parse`, `packRetiredSchema.safeParse`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `c55c76b114f4a2bb0a3f11bc695c58b7fb8663b1c802f7c5d4944a5a2cc735d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
