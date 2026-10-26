# `createRenderCardRegistry/register`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/render-card-registry.ts` · [Module README](../../../../../../modules/core/runner/cards/render-card-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:481951-481957](../../../../../../../reference/runtime/sand-eval-runner.cjs#L481951-L481957) | `FunctionExpression` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:481951-481957](../../../../../../../reference/runtime/sand-eval-runner.cjs#L481951-L481957) | 0 | 1 | 0 | 1 | 0 | 0 |

### evaluation:481951

Calls written directly in this body: `entries.has`, `entries.set`, `mintId`.

Assignment or increment targets: `id`.

SHA-256 of the source span: `c93237c026c03e80ad0f0a7a4866270a942b47cb79f4222e728a5d40876a482e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
