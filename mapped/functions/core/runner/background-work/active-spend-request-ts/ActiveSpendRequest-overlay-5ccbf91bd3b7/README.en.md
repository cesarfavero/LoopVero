# `ActiveSpendRequest.overlay`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work/active-spend-request.ts` · [Module README](../../../../../../modules/core/runner/background-work/active-spend-request-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490736-490740](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490736-L490740) | `method` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490736-490740](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490736-L490740) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490736

Calls written directly in this body: `Object.assign`.

SHA-256 of the source span: `a419831694d6f5420c1f45c1089ddc0621734a8bd1f8f95f2ec28f1baded13c9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
