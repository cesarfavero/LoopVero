# `createInProcessSearch/preparedFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/virtual-mounts/in-process-search.ts` · [Module README](../../../../../modules/core/virtual-mounts/in-process-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:766004-766016](../../../../../../reference/runtime/host-main.cjs#L766004-L766016) | `FunctionDeclaration` | no | `docs, ranker` |
| [evaluation:559368-559380](../../../../../../reference/runtime/sand-eval-runner.cjs#L559368-L559380) | `FunctionDeclaration` | no | `docs, ranker` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766004-766016](../../../../../../reference/runtime/host-main.cjs#L766004-L766016) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559368-559380](../../../../../../reference/runtime/sand-eval-runner.cjs#L559368-L559380) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:766004

Calls written directly in this body: `byRanker.get`, `byRanker.set`, `new Map`, `prepared.get`, `prepared.set`, `ranker.prepare`.

Assignment or increment targets: `byRanker`, `entry`.

SHA-256 of the source span: `55522ea54c68fb15bbfe0ab0db3c4e687215f008581973820cdf88cbd4d4c962`.

### evaluation:559368

Calls written directly in this body: `byRanker.get`, `byRanker.set`, `new Map`, `prepared.get`, `prepared.set`, `ranker.prepare`.

Assignment or increment targets: `byRanker`, `entry`.

SHA-256 of the source span: `55522ea54c68fb15bbfe0ab0db3c4e687215f008581973820cdf88cbd4d4c962`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
