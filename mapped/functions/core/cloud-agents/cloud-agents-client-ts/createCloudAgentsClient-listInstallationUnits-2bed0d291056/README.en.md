# `createCloudAgentsClient/listInstallationUnits`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513324-513392](../../../../../../reference/runtime/host-main.cjs#L513324-L513392) | `FunctionDeclaration` | yes | `search` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513324-513392](../../../../../../reference/runtime/host-main.cjs#L513324-L513392) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:513324

Calls written directly in this body: `.sort`, `.then`, `DASHBOARD_CONNECTABLE_PROVIDERS.map`, `Promise.all`, `accessDenied.sort`, `dashboard.listGitlabEnterpriseInstances`, `deps.getDashboardClient`, `deps.getOriginClient`, `inlineUnits.sort`, `listOriginNamespaces`, `new ListGitlabEnterpriseInstancesRequest`, `new Set`, `pagedUnits.sort`.

SHA-256 of the source span: `42f46d875f6e9d1fd71666a0d1f66a744bcbeaea63f21dc2501b2dc3a24ecc56`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
