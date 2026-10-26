# `cloudAgentAgeWords`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-project-view.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-project-view-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566316-566325](../../../../../../reference/runtime/sand-eval-runner.cjs#L566316-L566325) | `FunctionDeclaration` | no | `age` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566316-566325](../../../../../../reference/runtime/sand-eval-runner.cjs#L566316-L566325) | 5 | 0 | 0 | 6 | 0 | 0 |

### evaluation:566316

Calls written directly in this body: `.slice`, `.toISOString`, `Math.floor`, `Math.max`, `new Date`.

SHA-256 of the source span: `5004006fb324a9748ae01f2d1b6e147a54d45596eb2d98b76977d6e0a91b0621`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
