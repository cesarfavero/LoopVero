# `describeTeamsSetupOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/msteams/sand-teams-setup-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/msteams/sand-teams-setup-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781227-781249](../../../../../../../../reference/runtime/host-main.cjs#L781227-L781249) | `FunctionDeclaration` | no | `outcome, action` |
| [evaluation:581574-581596](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581574-L581596) | `FunctionDeclaration` | no | `outcome, action` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781227-781249](../../../../../../../../reference/runtime/host-main.cjs#L781227-L781249) | 14 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:581574-581596](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581574-L581596) | 14 | 0 | 0 | 7 | 0 | 0 |

### host:781227

Calls written directly in this body: `.join`, `inTenant`, `outcome.installedTeams.map`.

SHA-256 of the source span: `77eed5ce884fabfb5c5697a2f67eb528195ff22a30aaf854340143da806e8afe`.

### evaluation:581574

Calls written directly in this body: `.join`, `inTenant`, `outcome.installedTeams.map`.

SHA-256 of the source span: `77eed5ce884fabfb5c5697a2f67eb528195ff22a30aaf854340143da806e8afe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
