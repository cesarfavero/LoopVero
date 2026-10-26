# `createChannelThreadTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/channel/channel-thread-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/channel/channel-thread-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768389-768411](../../../../../../../../reference/runtime/host-main.cjs#L768389-L768411) | `FunctionDeclaration` | no | `ports` |
| [evaluation:563905-563927](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563905-L563927) | `FunctionDeclaration` | no | `ports` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768389-768411](../../../../../../../../reference/runtime/host-main.cjs#L768389-L768411) | 6 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:563905-563927](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563905-L563927) | 6 | 0 | 0 | 2 | 0 | 0 |

### host:768389

Calls written directly in this body: `createDeleteOwnMicrosoftTeamsMessageTool`, `createReactToMicrosoftTeamsMessageTool`, `createReactToSlackMessageTool`, `createSetMicrosoftTeamsStatusTool`, `createSlackThreadTools`, `tools.push`.

SHA-256 of the source span: `5a75339d07d675a1ce951baf639ddeb3486bdf9c9d25fc3e8018e847ab5e9edf`.

### evaluation:563905

Calls written directly in this body: `createDeleteOwnMicrosoftTeamsMessageTool`, `createReactToMicrosoftTeamsMessageTool`, `createReactToSlackMessageTool`, `createSetMicrosoftTeamsStatusTool`, `createSlackThreadTools`, `tools.push`.

SHA-256 of the source span: `5a75339d07d675a1ce951baf639ddeb3486bdf9c9d25fc3e8018e847ab5e9edf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
