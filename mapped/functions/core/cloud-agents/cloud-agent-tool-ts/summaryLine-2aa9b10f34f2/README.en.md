# `summaryLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:568038-568057](../../../../../../reference/runtime/sand-eval-runner.cjs#L568038-L568057) | `FunctionDeclaration` | no | `summary, view, subagentsStatus` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568038-568057](../../../../../../reference/runtime/sand-eval-runner.cjs#L568038-L568057) | 10 | 0 | 0 | 1 | 0 | 0 |

### evaluation:568038

Calls written directly in this body: `.join`, `activityWords`, `bits.join`, `bits.push`, `cloudAgentNeedsAttention`, `prRowLabel`, `summary.name.trim`, `summary.repoUrls.map`, `withSubagentsStatus`.

SHA-256 of the source span: `6456d49aa088d0a0e93be0f894deafdf239b1e5f2a1a73f646d9c7524c59aa0f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
