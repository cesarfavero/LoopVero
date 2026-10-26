# `InheritedInferenceLineageMiddleware.stream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/request-lineage.ts` · [Module README](../../../../../modules/core/runner/request-lineage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534778-534785](../../../../../../reference/runtime/sand-eval-runner.cjs#L534778-L534785) | `method` | no | `ctx, invocationId, tools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534778-534785](../../../../../../reference/runtime/sand-eval-runner.cjs#L534778-L534785) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:534778

Calls written directly in this body: `bindInheritedInferenceLineage`, `this.innerExecutor.stream`.

SHA-256 of the source span: `21008778aa87e3f54e51e0c0b6d3af41aa7f788a1a606ed47a23d4cd0d5112d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
