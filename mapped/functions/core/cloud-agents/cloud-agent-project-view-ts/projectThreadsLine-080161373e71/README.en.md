# `projectThreadsLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-project-view.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-project-view-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566375-566389](../../../../../../reference/runtime/sand-eval-runner.cjs#L566375-L566389) | `FunctionDeclaration` | no | `tree, failure3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566375-566389](../../../../../../reference/runtime/sand-eval-runner.cjs#L566375-L566389) | 5 | 0 | 0 | 4 | 0 | 0 |

### evaluation:566375

Calls written directly in this body: `.map`, `parts.join`, `tree.counts.filter`, `tree.counts.reduce`, `tree.nodes.filter`.

SHA-256 of the source span: `6bf2b6057361829d6eb30a18d536b93118281b557cee2352f5777d7ab0d36274`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
