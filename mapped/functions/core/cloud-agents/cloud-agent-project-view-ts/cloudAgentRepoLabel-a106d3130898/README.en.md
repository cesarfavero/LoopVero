# `cloudAgentRepoLabel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-project-view.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-project-view-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566326-566337](../../../../../../reference/runtime/sand-eval-runner.cjs#L566326-L566337) | `FunctionDeclaration` | no | `repoUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566326-566337](../../../../../../reference/runtime/sand-eval-runner.cjs#L566326-L566337) | 3 | 0 | 0 | 3 | 0 | 1 |

### evaluation:566326

Calls written directly in this body: `.filter`, `.pathname.split`, `name18.endsWith`, `name18.slice`, `new URL`, `segments.at`.

SHA-256 of the source span: `87f92ca7b133d34b7e6eff245aa5280cfb9f868c40b9bac7b11379cc1b1bbf06`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
