# `startIdleCompaction/settle2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `core/runner/idle-compaction/idle-compaction.ts` · [Module README](../../../../../../modules/core/runner/idle-compaction/idle-compaction-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:526382-526386](../../../../../../../reference/runtime/sand-eval-runner.cjs#L526382-L526386) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:526382-526386](../../../../../../../reference/runtime/sand-eval-runner.cjs#L526382-L526386) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:526382

Calls written directly in this body: `settled.resolve`, `stop`, `summary`.

SHA-256 of the source span: `6bedb0c8211bc3fca5a78f1b548408b2fe91fe09577e1f8b9f9665a432e90f01`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
