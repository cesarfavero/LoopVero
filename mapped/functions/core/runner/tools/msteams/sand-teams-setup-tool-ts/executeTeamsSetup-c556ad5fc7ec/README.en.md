# `executeTeamsSetup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/msteams/sand-teams-setup-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/msteams/sand-teams-setup-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781251-781269](../../../../../../../../reference/runtime/host-main.cjs#L781251-L781269) | `FunctionDeclaration` | yes | `args, d` |
| [evaluation:581598-581616](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581598-L581616) | `FunctionDeclaration` | yes | `args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781251-781269](../../../../../../../../reference/runtime/host-main.cjs#L781251-L781269) | 4 | 0 | 2 | 3 | 0 | 0 |
| [evaluation:581598-581616](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581598-L581616) | 4 | 0 | 2 | 3 | 0 | 0 |

### host:781251

Calls written directly in this body: `Date.now`, `d.isTeamSetupUnderway`, `d.onSendMessage`, `d.setup.start`, `d.setup.status`, `describeTeamsSetupOutcome`, `teamsSetupOwnerStepMessage`.

SHA-256 of the source span: `eb7a2aab9a054029f05b5ba540fced0a16eb282049e2cf7436070a0139994105`.

### evaluation:581598

Calls written directly in this body: `Date.now`, `d.isTeamSetupUnderway`, `d.onSendMessage`, `d.setup.start`, `d.setup.status`, `describeTeamsSetupOutcome`, `teamsSetupOwnerStepMessage`.

SHA-256 of the source span: `eb7a2aab9a054029f05b5ba540fced0a16eb282049e2cf7436070a0139994105`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
