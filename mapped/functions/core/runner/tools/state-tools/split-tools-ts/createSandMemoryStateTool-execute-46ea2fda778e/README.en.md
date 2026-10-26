# `createSandMemoryStateTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771727-771733](../../../../../../../../reference/runtime/host-main.cjs#L771727-L771733) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:570960-570966](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570960-L570966) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771727-771733](../../../../../../../../reference/runtime/host-main.cjs#L771727-L771733) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:570960-570966](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570960-L570966) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:771727

Calls written directly in this body: `executeMemoryUpdate`, `inOwnName`, `memoryStateArgs`, `recordMemoryOutcome`, `renderOutcome`.

SHA-256 of the source span: `62d70f4977048d8e38b357a2cdad229bfb6bbec69fa8b9f15828dd61201aed18`.

### evaluation:570960

Calls written directly in this body: `executeMemoryUpdate`, `inOwnName`, `memoryStateArgs`, `recordMemoryOutcome`, `renderOutcome`.

SHA-256 of the source span: `62d70f4977048d8e38b357a2cdad229bfb6bbec69fa8b9f15828dd61201aed18`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
