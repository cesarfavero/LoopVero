# `scoreEachWordByCoverage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/server-search/rank.ts` · [Module README](../../../../../../modules/core/runner/server-search/rank-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765888-765899](../../../../../../../reference/runtime/host-main.cjs#L765888-L765899) | `FunctionDeclaration` | no | `scorer, id, words2` |
| [evaluation:559252-559263](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559252-L559263) | `FunctionDeclaration` | no | `scorer, id, words` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765888-765899](../../../../../../../reference/runtime/host-main.cjs#L765888-L765899) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:559252-559263](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559252-L559263) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:765888

Calls written directly in this body: `scorer.score`.

Assignment or increment targets: `matched`, `total`.

SHA-256 of the source span: `7abfb1cf7c09e4c9b2d3edd56045f8f2a64b8637162d57c1e7e979966850dd0a`.

### evaluation:559252

Calls written directly in this body: `scorer.score`.

Assignment or increment targets: `matched`, `total`.

SHA-256 of the source span: `903050d5a80977d36a249505f41c11c1fce81e9913bbcb68d1262bd4e847e5ad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
