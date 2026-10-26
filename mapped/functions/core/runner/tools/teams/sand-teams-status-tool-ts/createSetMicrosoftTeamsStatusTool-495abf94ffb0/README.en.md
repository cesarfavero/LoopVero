# `createSetMicrosoftTeamsStatusTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/teams/sand-teams-status-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/teams/sand-teams-status-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740977-740990](../../../../../../../../reference/runtime/host-main.cjs#L740977-L740990) | `FunctionDeclaration` | no | `teamsStatus` |
| [evaluation:480578-480591](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L480578-L480591) | `FunctionDeclaration` | no | `teamsStatus` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740977-740990](../../../../../../../../reference/runtime/host-main.cjs#L740977-L740990) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480578-480591](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L480578-L480591) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740977

Calls written directly in this body: `defineZod4CommunicateTool`.

SHA-256 of the source span: `923013545be28b71a226375e68afe78e6523e9685619a453a4db64c453a9f18c`.

### evaluation:480578

Calls written directly in this body: `defineZod4CommunicateTool`.

SHA-256 of the source span: `923013545be28b71a226375e68afe78e6523e9685619a453a4db64c453a9f18c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
