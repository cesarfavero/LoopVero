# `createRecallMemoryTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/tools/recall-memory-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/recall-memory-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769817-769817](../../../../../../../reference/runtime/host-main.cjs#L769817-L769817) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [host:769828-769834](../../../../../../../reference/runtime/host-main.cjs#L769828-L769834) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:565486-565486](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565486-L565486) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:565497-565503](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565497-L565503) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769817-769817](../../../../../../../reference/runtime/host-main.cjs#L769817-L769817) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:769817 uses an implicit arrow-function return.
| [host:769828-769834](../../../../../../../reference/runtime/host-main.cjs#L769828-L769834) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:565486-565486](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565486-L565486) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:565486 uses an implicit arrow-function return.
| [evaluation:565497-565503](../../../../../../../reference/runtime/sand-eval-runner.cjs#L565497-L565503) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:769817

Calls written directly in this body: `recallMemory`.

SHA-256 of the source span: `bdb51c1c162246e2167afe24380c35d2e4ece1b309a610274d492f95f3592a80`.

### host:769828

Calls written directly in this body: `openMemoryFile`, `recallMemory`.

SHA-256 of the source span: `67483510bb500606eaa9901ca3eddc42bc42c5955fc71b682dc31dcb8aa964d4`.

### evaluation:565486

Calls written directly in this body: `recallMemory`.

SHA-256 of the source span: `bdb51c1c162246e2167afe24380c35d2e4ece1b309a610274d492f95f3592a80`.

### evaluation:565497

Calls written directly in this body: `openMemoryFile`, `recallMemory`.

SHA-256 of the source span: `67483510bb500606eaa9901ca3eddc42bc42c5955fc71b682dc31dcb8aa964d4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
