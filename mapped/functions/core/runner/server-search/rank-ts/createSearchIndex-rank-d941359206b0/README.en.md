# `createSearchIndex/rank`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/server-search/rank.ts` · [Module README](../../../../../../modules/core/runner/server-search/rank-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765907-765918](../../../../../../../reference/runtime/host-main.cjs#L765907-L765918) | `ArrowFunctionExpression` | yes | `query2, options2` |
| [evaluation:559271-559282](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559271-L559282) | `ArrowFunctionExpression` | yes | `query2, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765907-765918](../../../../../../../reference/runtime/host-main.cjs#L765907-L765918) | 2 | 1 | 1 | 2 | 0 | 0 |
| [evaluation:559271-559282](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559271-L559282) | 2 | 1 | 1 | 2 | 0 | 0 |

### host:765907

Calls written directly in this body: `.map`, `.slice`, `entries.entries`, `matches.push`, `matches.sort`, `new Set`, `queryWords`, `scoreEachWordByCoverage`, `sliceYielder`, `yieldIfDue`.

SHA-256 of the source span: `07ebf7037423e9cd5a66184d0035ce5b2dc4a8b47b871e6f8bc4a1ae0f2ba88f`.

### evaluation:559271

Calls written directly in this body: `.map`, `.slice`, `entries.entries`, `matches.push`, `matches.sort`, `new Set`, `queryWords`, `scoreEachWordByCoverage`, `sliceYielder`, `yieldIfDue`.

SHA-256 of the source span: `6edc5c11e8a1eb158bf21b52064e59554e6abafcd150ff0f5c01c1a4faa764dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
