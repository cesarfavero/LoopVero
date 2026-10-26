# `resolveLaunchRepoReference`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-request-composition.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-request-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:510254-510292](../../../../../../reference/runtime/host-main.cjs#L510254-L510292) | `FunctionDeclaration` | no | `repoUrl, savedEnvironment, readOriginPrIdentityHosts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510254-510292](../../../../../../reference/runtime/host-main.cjs#L510254-L510292) | 7 | 0 | 0 | 4 | 3 | 0 |

### host:510254

Calls written directly in this body: `.join`, `.some`, `describeSavedEnvironment`, `new SandCloudAgentLaunchError`, `normalizeLaunchRepoReference`, `originPrIdentityHostsFor`, `rejectBareRepoSlug`, `repoIdentityKey`, `repoIdentityKeysEqual`, `repoUrl.trim`, `repos.map`, `repos.slice`, `repos[computed].repoUrl.trim`.

Explicit throw targets: `SandCloudAgentLaunchError`.

SHA-256 of the source span: `0e561819bf42544b76c9813028e0767ceab55d00ef0e810daaac4d884577dd43`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
