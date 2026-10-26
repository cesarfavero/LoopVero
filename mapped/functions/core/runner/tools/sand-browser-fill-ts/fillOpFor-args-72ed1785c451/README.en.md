# `fillOpFor/args`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727146-727146](../../../../../../../reference/runtime/host-main.cjs#L727146-L727146) | `ArrowFunctionExpression` | no | `ref2, value` |
| [host:727151-727151](../../../../../../../reference/runtime/host-main.cjs#L727151-L727151) | `ArrowFunctionExpression` | no | `ref2, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727146-727146](../../../../../../../reference/runtime/host-main.cjs#L727146-L727146) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:727146 uses an implicit arrow-function return.
| [host:727151-727151](../../../../../../../reference/runtime/host-main.cjs#L727151-L727151) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:727151 uses an implicit arrow-function return.

### host:727146

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `0c788002a6d24e79dc67b8997ed997f2ec4b1ef71649758e519216433607d34c`.

### host:727151

Calls written directly in this body: `userFormValueLooksLikeCardNumber`.

SHA-256 of the source span: `001afa132d5d1d54548133f24af3658503c7f51fa8a0ae89a8399cb4803f6d3b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
