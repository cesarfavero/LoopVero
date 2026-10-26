# `createReactToMicrosoftTeamsMessageTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/teams/sand-teams-reaction-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/teams/sand-teams-reaction-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768337-768356](../../../../../../../../reference/runtime/host-main.cjs#L768337-L768356) | `ArrowFunctionExpression` | yes | `ctx, args, teams` |
| [evaluation:563853-563872](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563853-L563872) | `ArrowFunctionExpression` | yes | `ctx, args, teams` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768337-768356](../../../../../../../../reference/runtime/host-main.cjs#L768337-L768356) | 3 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:563853-563872](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563853-L563872) | 3 | 0 | 1 | 1 | 1 | 0 |

### host:768337

Calls written directly in this body: `args.activity_id.trim`, `args.conversation.trim`, `args.reaction.trim`, `new SandToolInputError`, `new ShimCall`, `normalizationForm`, `normalizeTeamsReactionName`, `shims.flush`, `shims.report`, `teams.react`, `teamsReactionNameNormalization.applied`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `b7efab2a322337b318fdba8181fedd660c89d1a06b86cc34b5c2b60a39b9c9e1`.

### evaluation:563853

Calls written directly in this body: `args.activity_id.trim`, `args.conversation.trim`, `args.reaction.trim`, `new SandToolInputError`, `new ShimCall`, `normalizationForm`, `normalizeTeamsReactionName`, `shims.flush`, `shims.report`, `teams.react`, `teamsReactionNameNormalization.applied`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `b7efab2a322337b318fdba8181fedd660c89d1a06b86cc34b5c2b60a39b9c9e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
