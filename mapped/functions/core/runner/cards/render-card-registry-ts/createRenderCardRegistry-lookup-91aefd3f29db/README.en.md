# `createRenderCardRegistry/lookup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/render-card-registry.ts` · [Module README](../../../../../../modules/core/runner/cards/render-card-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:481958-481958](../../../../../../../reference/runtime/sand-eval-runner.cjs#L481958-L481958) | `ArrowFunctionExpression` | no | `_ctx, id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:481958-481958](../../../../../../../reference/runtime/sand-eval-runner.cjs#L481958-L481958) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:481958 uses an implicit arrow-function return.

### evaluation:481958

Calls written directly in this body: `Promise.resolve`, `canonicalRenderCardId`, `entries.get`.

SHA-256 of the source span: `960749d19aa14f1cf5ffc857c0455712b59c84309d165890a2797bc6c9915a73`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
