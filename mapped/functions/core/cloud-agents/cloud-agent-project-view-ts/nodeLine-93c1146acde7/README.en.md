# `nodeLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-project-view.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-project-view-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566365-566373](../../../../../../reference/runtime/sand-eval-runner.cjs#L566365-L566373) | `FunctionDeclaration` | no | `node2, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566365-566373](../../../../../../reference/runtime/sand-eval-runner.cjs#L566365-L566373) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:566365

Calls written directly in this body: `  .repeat`, `Math.max`, `activityWords`, `bits.join`, `bits.push`, `statusWord`, `threadName`, `withSubagentsStatus`.

SHA-256 of the source span: `7aed18501e68914e58bdbdb10ac12607fa65ef2ed528ca9f4fa52bc32cf6ed25`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
