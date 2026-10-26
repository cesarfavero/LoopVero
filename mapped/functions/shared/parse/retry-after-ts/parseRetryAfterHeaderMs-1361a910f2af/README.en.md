# `parseRetryAfterHeaderMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/parse/retry-after.ts` · [Module README](../../../../../modules/shared/parse/retry-after-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451200-451215](../../../../../../reference/runtime/host-main.cjs#L451200-L451215) | `FunctionDeclaration` | no | `raw, nowMs2 = Date.now()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451200-451215](../../../../../../reference/runtime/host-main.cjs#L451200-L451215) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:451200

Calls written directly in this body: `Date.parse`, `Math.round`, `Number`, `Number.isFinite`, `Number.isNaN`, `raw.trim`.

SHA-256 of the source span: `2272674c39f0354818d3288994f289b5a9755362a9dddfee68d114c4fc8bd6c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
