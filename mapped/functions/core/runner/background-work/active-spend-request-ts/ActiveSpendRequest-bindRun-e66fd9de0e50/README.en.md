# `ActiveSpendRequest.bindRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work/active-spend-request.ts` · [Module README](../../../../../../modules/core/runner/background-work/active-spend-request-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490741-490749](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490741-L490749) | `method` | no | `run, body` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490741-490749](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490741-L490749) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490741

Calls written directly in this body: `.finally`, `body`.

Assignment or increment targets: `this.binding`.

SHA-256 of the source span: `e45f015edebd0dd823c36bc4652b2a679aaf063624bb36acccc9cae211a3f276`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
