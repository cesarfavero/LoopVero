# `createOverlapRanker/prepare`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/virtual-mounts/rankers.ts` · [Module README](../../../../../modules/core/virtual-mounts/rankers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765938-765953](../../../../../../reference/runtime/host-main.cjs#L765938-L765953) | `ArrowFunctionExpression` | yes | `docs` |
| [evaluation:559302-559317](../../../../../../reference/runtime/sand-eval-runner.cjs#L559302-L559317) | `ArrowFunctionExpression` | yes | `docs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765938-765953](../../../../../../reference/runtime/host-main.cjs#L765938-L765953) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559302-559317](../../../../../../reference/runtime/sand-eval-runner.cjs#L559302-L559317) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765938

Calls written directly in this body: `docs.map`.

SHA-256 of the source span: `2f001b7605877be894d1e12ec8960a0f7ba879cff0d4e37e4484422e61fd9d04`.

### evaluation:559302

Calls written directly in this body: `docs.map`.

SHA-256 of the source span: `2f001b7605877be894d1e12ec8960a0f7ba879cff0d4e37e4484422e61fd9d04`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
