# `renderProjectTreeDetail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-project-view.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-project-view-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566451-566483](../../../../../../reference/runtime/sand-eval-runner.cjs#L566451-L566483) | `FunctionDeclaration` | no | `detail, trees, nowMs, ownership` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566451-566483](../../../../../../reference/runtime/sand-eval-runner.cjs#L566451-L566483) | 10 | 0 | 0 | 1 | 0 | 0 |

### evaluation:566451

Calls written directly in this body: `.filter`, `.join`, `cloudAgentAgeWords`, `cloudAgentNeedsAttention`, `detail.repoUrls.map`, `lines2.join`, `lines2.push`, `new Set`, `omittedLines`, `prUrls.join`, `projectThreadsLine`, `tree.nodes.map`, `trees.trees.get`, `withSubagentsStatus`.

SHA-256 of the source span: `12166f5f2bf6f4685cc47ff20f200e459dee4bbd091674d2bdbafa33fb7d2f36`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
