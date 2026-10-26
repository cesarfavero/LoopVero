# `resolvePrivateWorkerTeamId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512819-512843](../../../../../../reference/runtime/host-main.cjs#L512819-L512843) | `FunctionDeclaration` | yes | `deps, environment` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512819-512843](../../../../../../reference/runtime/host-main.cjs#L512819-L512843) | 5 | 0 | 1 | 4 | 2 | 0 |

### host:512819

Calls written directly in this body: `.getTeams`, `.join`, `deps.getDashboardClient`, `new GetTeamsRequest`, `new SandCloudAgentLaunchError`, `response.teams.filter`, `teams.map`.

Explicit throw targets: `SandCloudAgentLaunchError`.

SHA-256 of the source span: `89684f3563b7445d7e58b0f26c302f6c0a7443f2bfa03598961699fec292674a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
