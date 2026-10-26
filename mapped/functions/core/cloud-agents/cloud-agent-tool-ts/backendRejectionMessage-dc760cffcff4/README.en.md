# `backendRejectionMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567968-567997](../../../../../../reference/runtime/sand-eval-runner.cjs#L567968-L567997) | `FunctionDeclaration` | no | `error63, repoUrl, readOriginPrIdentityHosts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567968-567997](../../../../../../reference/runtime/sand-eval-runner.cjs#L567968-L567997) | 10 | 0 | 0 | 9 | 0 | 0 |

### evaluation:567968

Calls written directly in this body: `.find`, `.map`, `/please reconnect (github|gitlab|bitbucket|azure)/i.test`, `/repositor/i.test`, `detectScmProviderForRepoUrl`, `error63.findDetails`, `error63.rawMessage.trim`, `scmProviderDisplayName`.

SHA-256 of the source span: `5afd32791c638294827a8e6f6ea0482e8530b1eebcf7508bc0980d5f47bbd605`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
