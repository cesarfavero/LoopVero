# `createBoxTransport/httpClient`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/box-remote-accessor.ts` · [Module README](../../../../../modules/host/box/box-remote-accessor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679004-679006](../../../../../../reference/runtime/host-main.cjs#L679004-L679006) | `ArrowFunctionExpression` | no | `request5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679004-679006](../../../../../../reference/runtime/host-main.cjs#L679004-L679006) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:679004 uses an implicit arrow-function return.

### host:679004

Calls written directly in this body: `httpClient`, `new AbortController`.

SHA-256 of the source span: `440c244451e086c108fb922c34dab21c2f3fcc510df97f8e742e289673bebaba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
