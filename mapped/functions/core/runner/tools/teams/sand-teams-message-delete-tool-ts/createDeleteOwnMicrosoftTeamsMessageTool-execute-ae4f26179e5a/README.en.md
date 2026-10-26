# `createDeleteOwnMicrosoftTeamsMessageTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/teams/sand-teams-message-delete-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/teams/sand-teams-message-delete-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768378-768384](../../../../../../../../reference/runtime/host-main.cjs#L768378-L768384) | `ArrowFunctionExpression` | yes | `_ctx, args, teams` |
| [evaluation:563894-563900](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563894-L563900) | `ArrowFunctionExpression` | yes | `_ctx, args, teams` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768378-768384](../../../../../../../../reference/runtime/host-main.cjs#L768378-L768384) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:563894-563900](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563894-L563900) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:768378

Calls written directly in this body: `args.activity_id.trim`, `args.conversation.trim`, `teams.deleteOwnMessage`.

SHA-256 of the source span: `69d7e2ecc4dbe87a0c6c6d3e9813128fa66354de3c1a7630e4884d98d33f3de7`.

### evaluation:563894

Calls written directly in this body: `args.activity_id.trim`, `args.conversation.trim`, `teams.deleteOwnMessage`.

SHA-256 of the source span: `69d7e2ecc4dbe87a0c6c6d3e9813128fa66354de3c1a7630e4884d98d33f3de7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
