# `walkOriginRepositories`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/origin-repo-listing.ts` · [Module README](../../../../../modules/core/cloud-agents/origin-repo-listing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512349-512405](../../../../../../reference/runtime/host-main.cjs#L512349-L512405) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512349-512405](../../../../../../reference/runtime/host-main.cjs#L512349-L512405) | 9 | 3 | 1 | 3 | 0 | 0 |

### host:512349

Calls written directly in this body: `fetchOriginPage`, `originPortalHostnames`, `originRepoPortalUrl`, `page.repositories.slice`, `repos.push`, `resumeHere`, `unlistableInstallations.push`, `unreachableProviders.includes`, `unreachableProviders.push`.

Assignment or increment targets: `fetches`, `index`, `pageToken`, `portalHostnames`, `within`.

SHA-256 of the source span: `7e2d00aee716b0b28e8dabfa5d7fd4df7be91e9856196dffcf9c7ebe5de86e2e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
