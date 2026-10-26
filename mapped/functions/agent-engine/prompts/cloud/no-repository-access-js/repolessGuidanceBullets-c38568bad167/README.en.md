# `repolessGuidanceBullets`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/cloud/no-repository-access.js` · [Module README](../../../../../../modules/agent-engine/prompts/cloud/no-repository-access-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:635732-635742](../../../../../../../reference/runtime/host-main.cjs#L635732-L635742) | `FunctionDeclaration` | no | `variant` |
| [evaluation:423790-423800](../../../../../../../reference/runtime/sand-eval-runner.cjs#L423790-L423800) | `FunctionDeclaration` | no | `variant` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:635732-635742](../../../../../../../reference/runtime/host-main.cjs#L635732-L635742) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:423790-423800](../../../../../../../reference/runtime/sand-eval-runner.cjs#L423790-L423800) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:635732

Calls written directly in this body: `noRepositoryAccessBullets`, `selfHostedRepositoryBootstrapBullets`.

SHA-256 of the source span: `a84ac1d68d47d000ed7e230297ef10677cfa68065d86c9ba5c86384b31ade601`.

### evaluation:423790

Calls written directly in this body: `noRepositoryAccessBullets`, `selfHostedRepositoryBootstrapBullets`.

SHA-256 of the source span: `a84ac1d68d47d000ed7e230297ef10677cfa68065d86c9ba5c86384b31ade601`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
