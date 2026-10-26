# `runCloudAgentAction/rowLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:568338-568345](../../../../../../reference/runtime/sand-eval-runner.cjs#L568338-L568345) | `ArrowFunctionExpression` | no | `summary` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568338-568345](../../../../../../reference/runtime/sand-eval-runner.cjs#L568338-L568345) | 2 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:568338 uses an implicit arrow-function return.

### evaluation:568338

Calls written directly in this body: `projectThreadsRowLines`, `summaryLine`, `trees.trees.get`.

SHA-256 of the source span: `0491b692bf3070959bfba5bbe2c8d183f4282b7db67ec5a67db82a4969f415ab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
