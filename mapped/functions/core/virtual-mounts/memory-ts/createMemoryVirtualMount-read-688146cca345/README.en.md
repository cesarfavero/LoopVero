# `createMemoryVirtualMount/read`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/virtual-mounts/memory.ts` · [Module README](../../../../../modules/core/virtual-mounts/memory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769659-769677](../../../../../../reference/runtime/host-main.cjs#L769659-L769677) | `ArrowFunctionExpression` | yes | `_ctx, _access, path33, window2 = {}` |
| [evaluation:565328-565346](../../../../../../reference/runtime/sand-eval-runner.cjs#L565328-L565346) | `ArrowFunctionExpression` | yes | `_ctx, _access, path33, window2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769659-769677](../../../../../../reference/runtime/host-main.cjs#L769659-L769677) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:565328-565346](../../../../../../reference/runtime/sand-eval-runner.cjs#L565328-L565346) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:769659

Calls written directly in this body: `.filter`, `candidates.filter`, `collectMemoryCandidates`, `path33.split`, `refused2`, `scopesUnder`, `selected.map`, `windowOf2`.

SHA-256 of the source span: `d7e51e1ac16c2b33a85d55c49ef3f0af96d792c107be4846018aa23d43b8328a`.

### evaluation:565328

Calls written directly in this body: `.filter`, `candidates.filter`, `collectMemoryCandidates`, `path33.split`, `refused`, `scopesUnder`, `selected.map`, `windowOf`.

SHA-256 of the source span: `1876d0d187ef62c60c8dd6dccf02c39b9f4d2165e597d8a96c36f35d25bdff1e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
