# `createBackgroundWatches/cancelShellRewatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work.ts` · [Module README](../../../../../modules/core/runner/background-work-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490673-490675](../../../../../../reference/runtime/sand-eval-runner.cjs#L490673-L490675) | `ArrowFunctionExpression` | no | `shellId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490673-490675](../../../../../../reference/runtime/sand-eval-runner.cjs#L490673-L490675) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:490673

Calls written directly in this body: `.cancel`, `shellRewatches.get`.

SHA-256 of the source span: `436b6c1039d9af9a9010d5a5af7a14b189396133a4d3bd2b132982756a988fd8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
