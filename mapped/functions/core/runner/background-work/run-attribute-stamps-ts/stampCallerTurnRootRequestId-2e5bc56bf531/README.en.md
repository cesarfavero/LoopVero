# `stampCallerTurnRootRequestId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work/run-attribute-stamps.ts` · [Module README](../../../../../../modules/core/runner/background-work/run-attribute-stamps-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490770-490779](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490770-L490779) | `FunctionDeclaration` | no | `span, inferenceRequestId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490770-490779](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490770-L490779) | 0 | 0 | 0 | 0 | 0 | 1 |

### evaluation:490770

Calls written directly in this body: `errorLogTag`, `process.stderr.write`, `span.setAttribute`.

SHA-256 of the source span: `737f49c8785a0b131696ab449d1b48b2ebe46076de36a0cc747c69e77cfcb8f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
