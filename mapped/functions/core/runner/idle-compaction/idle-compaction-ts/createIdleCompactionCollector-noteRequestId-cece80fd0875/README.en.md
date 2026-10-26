# `createIdleCompactionCollector/noteRequestId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `core/runner/idle-compaction/idle-compaction.ts` · [Module README](../../../../../../modules/core/runner/idle-compaction/idle-compaction-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:526469-526471](../../../../../../../reference/runtime/sand-eval-runner.cjs#L526469-L526471) | `ArrowFunctionExpression` | no | `requestId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:526469-526471](../../../../../../../reference/runtime/sand-eval-runner.cjs#L526469-L526471) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:526469

Calls written directly in this body: `requestIds.add`.

SHA-256 of the source span: `1a6f8dc57f26a85ac9d71f39ec475578af7b175c2d7f65c140ec7773be0f5559`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
