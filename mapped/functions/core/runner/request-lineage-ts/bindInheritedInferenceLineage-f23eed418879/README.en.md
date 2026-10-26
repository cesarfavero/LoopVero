# `bindInheritedInferenceLineage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/request-lineage.ts` · [Module README](../../../../../modules/core/runner/request-lineage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534762-534776](../../../../../../reference/runtime/sand-eval-runner.cjs#L534762-L534776) | `FunctionDeclaration` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534762-534776](../../../../../../reference/runtime/sand-eval-runner.cjs#L534762-L534776) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:534762

Calls written directly in this body: `.with`, `ctx.get`, `ctx.with`, `withLineage.with`.

SHA-256 of the source span: `85ec4983af3adaa51d1e4b126c795336d0572b2b4ee820100cb7e0ee6cd8e0b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
