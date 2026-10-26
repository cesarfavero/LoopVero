# `createSubagentRuntime/abortAll`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagent-runtime.ts` · [Module README](../../../../../modules/core/runner/subagent-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535611-535615](../../../../../../reference/runtime/sand-eval-runner.cjs#L535611-L535615) | `ArrowFunctionExpression` | no | `reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535611-535615](../../../../../../reference/runtime/sand-eval-runner.cjs#L535611-L535615) | 0 | 1 | 0 | 0 | 0 | 0 |

### evaluation:535611

Calls written directly in this body: `abortSubagent`, `backgroundSubagentRuns.keys`.

SHA-256 of the source span: `0006acb7ad564a665386839fb9f9288bcb6544d0e61c4d4840f135b7ad9293ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
