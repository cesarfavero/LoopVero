# `createCloudAgentsClient/listRepositories/fetchUnitPage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513434-513453](../../../../../../reference/runtime/host-main.cjs#L513434-L513453) | `FunctionDeclaration` | yes | `unit, page` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513434-513453](../../../../../../reference/runtime/host-main.cjs#L513434-L513453) | 3 | 0 | 1 | 3 | 0 | 1 |

### host:513434

Calls written directly in this body: `dashboard.getInstallationRepos`, `new GetInstallationReposRequest`.

SHA-256 of the source span: `54457dc055fd25466628140adadb123ee30f8738cc6e7b486b9601980f6257f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
