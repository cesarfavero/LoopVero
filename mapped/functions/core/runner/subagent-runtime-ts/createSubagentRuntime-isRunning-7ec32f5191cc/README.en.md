# `createSubagentRuntime/isRunning`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagent-runtime.ts` · [Module README](../../../../../modules/core/runner/subagent-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535609-535609](../../../../../../reference/runtime/sand-eval-runner.cjs#L535609-L535609) | `ArrowFunctionExpression` | no | `subagentAgentId` |
| [evaluation:535630-535630](../../../../../../reference/runtime/sand-eval-runner.cjs#L535630-L535630) | `ArrowFunctionExpression` | no | `subagentAgentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535609-535609](../../../../../../reference/runtime/sand-eval-runner.cjs#L535609-L535609) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:535609 uses an implicit arrow-function return.
| [evaluation:535630-535630](../../../../../../reference/runtime/sand-eval-runner.cjs#L535630-L535630) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:535630 uses an implicit arrow-function return.

### evaluation:535609

Calls written directly in this body: `backgroundSubagentRuns.has`.

SHA-256 of the source span: `685998e8ca2abdfc64ea5bf64e7f75805a87f1f2ac74b11fbeb0cd2dcf24990e`.

### evaluation:535630

Calls written directly in this body: `backgroundSubagentRuns.has`.

SHA-256 of the source span: `685998e8ca2abdfc64ea5bf64e7f75805a87f1f2ac74b11fbeb0cd2dcf24990e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
