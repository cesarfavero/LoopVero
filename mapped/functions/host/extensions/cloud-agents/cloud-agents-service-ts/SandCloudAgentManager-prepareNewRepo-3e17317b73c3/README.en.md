# `SandCloudAgentManager.prepareNewRepo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538477-538540](../../../../../../../reference/runtime/host-main.cjs#L538477-L538540) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538477-538540](../../../../../../../reference/runtime/host-main.cjs#L538477-L538540) | 3 | 0 | 3 | 1 | 0 | 0 |

### host:538477

Calls written directly in this body: `.encode`, `.getMe`, `.getTimezoneOffset`, `0.repeat`, `BigInt`, `Date.now`, `Math.floor`, `createOriginNewRepo`, `new CommitFileOperation`, `new CommitFileUpsert`, `new CreateCommitFromFilesClientRequest`, `new Date`, `new GetMeRequest`, `new Signature`, `new TextEncoder`, `originClient.createCommitFromFiles`, `originRepoClonePath`, `originTeamCallOptions`, `teamId.toString`, `this.getDashboardClient`, `this.getOriginClient`.

Assignment or increment targets: `project2`, `project2.seeded`, `this.pendingNewProject`.

SHA-256 of the source span: `7ecf75f721845a22d812ad73516754146607be387301410df5bdfa34f85a349b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
