# `describeOriginNewRepoRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/origin-new-repo.ts` · [Module README](../../../../../modules/core/cloud-agents/origin-new-repo-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513850-513855](../../../../../../reference/runtime/host-main.cjs#L513850-L513855) | `FunctionDeclaration` | no | `error64, target, readPortalBaseUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513850-513855](../../../../../../reference/runtime/host-main.cjs#L513850-L513855) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:513850

Calls written directly in this body: `new SandCloudAgentLaunchError`, `originGetStartedUrl`, `refusalMessage`.

SHA-256 of the source span: `95b62848193fdf10bff42e1376591603b512a752269a34de3969be302e77bedf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
