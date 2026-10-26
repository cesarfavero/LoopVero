# `createReactToMicrosoftTeamsMessageTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/teams/sand-teams-reaction-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/teams/sand-teams-reaction-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768327-768358](../../../../../../../../reference/runtime/host-main.cjs#L768327-L768358) | `FunctionDeclaration` | no | `reaction` |
| [evaluation:563843-563874](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563843-L563874) | `FunctionDeclaration` | no | `reaction` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768327-768358](../../../../../../../../reference/runtime/host-main.cjs#L768327-L768358) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563843-563874](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563843-L563874) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768327

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `b8eabba79cd4383678521c8b2b6d392587f2a6efb37b8f5f3a3889a47214b292`.

### evaluation:563843

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `b8eabba79cd4383678521c8b2b6d392587f2a6efb37b8f5f3a3889a47214b292`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
