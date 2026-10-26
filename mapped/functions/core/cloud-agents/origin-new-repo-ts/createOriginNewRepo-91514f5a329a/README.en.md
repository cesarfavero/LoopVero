# `createOriginNewRepo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/origin-new-repo.ts` · [Module README](../../../../../modules/core/cloud-agents/origin-new-repo-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513811-513849](../../../../../../reference/runtime/host-main.cjs#L513811-L513849) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513811-513849](../../../../../../reference/runtime/host-main.cjs#L513811-L513849) | 6 | 0 | 2 | 1 | 3 | 0 |

### host:513811

Calls written directly in this body: `.catch`, `args.callOptions`, `args.canProvisionUserNamespace`, `args.client.createRepoAndEnsureUserNamespace`, `args.client.getAuthorizedNamespaces`, `new CreateRepoRequest`, `new GetAuthorizedNamespacesRequest`, `new SandCloudAgentLaunchError`, `originGetStartedUrl`, `pickOriginNewRepoNamespace`, `response.repository.defaultBranch.trim`, `response.repository.identifier.name.trim`, `response.repository.identifier.org.trim`.

Explicit throw targets: `SandCloudAgentLaunchError`.

SHA-256 of the source span: `68fcedfe07e80fee4c4325a4075f8caed5ecb6045d39c5fadcf35d1c01b99001`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
