# `createSafeConnectTransport/httpClient`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225155-225157](../../../../../../../reference/runtime/host-main.cjs#L225155-L225157) | `ArrowFunctionExpression` | no | `request5` |
| [evaluation:512226-512228](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512226-L512228) | `ArrowFunctionExpression` | no | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225155-225157](../../../../../../../reference/runtime/host-main.cjs#L225155-L225157) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:225155 uses an implicit arrow-function return.
| [evaluation:512226-512228](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512226-L512228) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:512226 uses an implicit arrow-function return.

### host:225155

Calls written directly in this body: `httpClient`, `new AbortController`.

SHA-256 of the source span: `440c244451e086c108fb922c34dab21c2f3fcc510df97f8e742e289673bebaba`.

### evaluation:512226

Calls written directly in this body: `httpClient`, `new AbortController`.

SHA-256 of the source span: `fbc0d9d2949f1822d1cf65945528b488d4deeb2d12f5e3756460e8e5279b8663`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
