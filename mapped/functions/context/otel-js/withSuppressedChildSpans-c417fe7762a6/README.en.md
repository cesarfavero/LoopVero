# `withSuppressedChildSpans`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225816-225818](../../../../../reference/runtime/host-main.cjs#L225816-L225818) | `FunctionDeclaration` | no | `ctx` |
| [evaluation:2304-2306](../../../../../reference/runtime/sand-eval-runner.cjs#L2304-L2306) | `FunctionDeclaration` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225816-225818](../../../../../reference/runtime/host-main.cjs#L225816-L225818) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:2304-2306](../../../../../reference/runtime/sand-eval-runner.cjs#L2304-L2306) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225816

Calls written directly in this body: `ctx.with`.

SHA-256 of the source span: `dc1de5fa8b668da6ee3a499399eee267a5de7af790b071de2835c0b17877f77b`.

### evaluation:2304

Calls written directly in this body: `ctx.with`.

SHA-256 of the source span: `dc1de5fa8b668da6ee3a499399eee267a5de7af790b071de2835c0b17877f77b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
