# `SandSubagentHostAdapter.runSession/run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/agent-adapters.ts` · [Module README](../../../../../modules/core/runner/agent-adapters-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583061-583073](../../../../../../reference/runtime/sand-eval-runner.cjs#L583061-L583073) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583061-583073](../../../../../../reference/runtime/sand-eval-runner.cjs#L583061-L583073) | 4 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:583061 uses an implicit arrow-function return.

### evaluation:583061

Calls written directly in this body: `computeSubagentRequestId`, `runSandAgentTurn`, `this.subagentTask`.

SHA-256 of the source span: `f2580426814aa95a772efa41bdfd354a45060a0b85c2d30c4d2ed9dada75ccde`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
