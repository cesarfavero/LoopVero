# `createDeleteOwnMicrosoftTeamsMessageTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/teams/sand-teams-message-delete-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/teams/sand-teams-message-delete-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768368-768386](../../../../../../../../reference/runtime/host-main.cjs#L768368-L768386) | `FunctionDeclaration` | no | `messageDelete` |
| [evaluation:563884-563902](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563884-L563902) | `FunctionDeclaration` | no | `messageDelete` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768368-768386](../../../../../../../../reference/runtime/host-main.cjs#L768368-L768386) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563884-563902](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563884-L563902) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768368

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `d1f6ba008984e922f65713bf0ae967b65e2b23c659bae37045ae5c43edcf35d6`.

### evaluation:563884

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `d1f6ba008984e922f65713bf0ae967b65e2b23c659bae37045ae5c43edcf35d6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
