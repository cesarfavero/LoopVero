# `portalRepoCloneUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/origin-repo-reference.ts` · [Module README](../../../../../modules/core/cloud-agents/origin-repo-reference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509110-509115](../../../../../../reference/runtime/host-main.cjs#L509110-L509115) | `FunctionDeclaration` | no | `raw, identityHosts` |
| [evaluation:556863-556868](../../../../../../reference/runtime/sand-eval-runner.cjs#L556863-L556868) | `FunctionDeclaration` | no | `raw, identityHosts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509110-509115](../../../../../../reference/runtime/host-main.cjs#L509110-L509115) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:556863-556868](../../../../../../reference/runtime/sand-eval-runner.cjs#L556863-L556868) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:509110

Calls written directly in this body: `originRepoClonePath`, `parseOriginPortalRepoPage`, `repoReferenceAsUrl`.

SHA-256 of the source span: `3d55b13099f3549d0ceb5bb7e3ee7a67eea4840bd8a64ece0c82470187d2284c`.

### evaluation:556863

Calls written directly in this body: `originRepoClonePath`, `parseOriginPortalRepoPage`, `repoReferenceAsUrl`.

SHA-256 of the source span: `3d55b13099f3549d0ceb5bb7e3ee7a67eea4840bd8a64ece0c82470187d2284c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
