# `createSubagentRuntime/notifyBackgroundWorkSettled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagent-runtime.ts` · [Module README](../../../../../modules/core/runner/subagent-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535621-535623](../../../../../../reference/runtime/sand-eval-runner.cjs#L535621-L535623) | `ArrowFunctionExpression` | no | `completion` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535621-535623](../../../../../../reference/runtime/sand-eval-runner.cjs#L535621-L535623) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:535621

Calls written directly in this body: `onBackgroundSubagentSettled`.

SHA-256 of the source span: `1ce042cf2e78a710f5a8ce5ff3e2a7d803afdeb96e72650eb5fe45d710145b47`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
