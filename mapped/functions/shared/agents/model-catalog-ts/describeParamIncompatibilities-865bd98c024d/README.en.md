# `describeParamIncompatibilities`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/model-catalog.ts` · [Module README](../../../../../modules/shared/agents/model-catalog-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567605-567636](../../../../../../reference/runtime/sand-eval-runner.cjs#L567605-L567636) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567605-567636](../../../../../../reference/runtime/sand-eval-runner.cjs#L567605-L567636) | 4 | 4 | 0 | 2 | 0 | 0 |

### evaluation:567605

Calls written directly in this body: `coOccurs`, `new Set`, `notes.push`, `present2.entries`, `present2.push`, `present2.slice`, `seen.add`, `seen.has`.

SHA-256 of the source span: `3593ff185f850b565ce397e5a4ba38b10ea851d4e393ad13d55acce8dd6a6146`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
