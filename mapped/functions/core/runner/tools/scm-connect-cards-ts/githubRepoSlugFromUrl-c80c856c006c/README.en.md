# `githubRepoSlugFromUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/scm-connect-cards.ts` · [Module README](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509192-509197](../../../../../../../reference/runtime/host-main.cjs#L509192-L509197) | `FunctionDeclaration` | no | `repoUrl` |
| [evaluation:556917-556922](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556917-L556922) | `FunctionDeclaration` | no | `repoUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509192-509197](../../../../../../../reference/runtime/host-main.cjs#L509192-L509197) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:556917-556922](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556917-L556922) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:509192

Calls written directly in this body: `.filter`, `.split`, `.toLowerCase`, `isDotcomGithubHost`, `repoUrlAsHttp`, `url2.pathname.replace`.

SHA-256 of the source span: `ff3fa886252eaf9ca73d280c885741ac3174b3965fb8a8d867df38cd2c6bbf79`.

### evaluation:556917

Calls written directly in this body: `.filter`, `.split`, `.toLowerCase`, `isDotcomGithubHost`, `repoUrlAsHttp`, `url2.pathname.replace`.

SHA-256 of the source span: `ff3fa886252eaf9ca73d280c885741ac3174b3965fb8a8d867df38cd2c6bbf79`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
