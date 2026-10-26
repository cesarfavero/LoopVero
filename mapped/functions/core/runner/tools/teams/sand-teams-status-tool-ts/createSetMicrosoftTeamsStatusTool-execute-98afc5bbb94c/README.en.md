# `createSetMicrosoftTeamsStatusTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/teams/sand-teams-status-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/teams/sand-teams-status-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740983-740988](../../../../../../../../reference/runtime/host-main.cjs#L740983-L740988) | `ArrowFunctionExpression` | yes | `_ctx, args, deps` |
| [evaluation:480584-480589](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L480584-L480589) | `ArrowFunctionExpression` | yes | `_ctx, args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740983-740988](../../../../../../../../reference/runtime/host-main.cjs#L740983-L740988) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:480584-480589](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L480584-L480589) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:740983

Calls written directly in this body: `deps.set`.

SHA-256 of the source span: `baade325afe5c4eeab17d8ddd28f91a37546e1d2bf12b837274105ef64e435aa`.

### evaluation:480584

Calls written directly in this body: `deps.set`.

SHA-256 of the source span: `baade325afe5c4eeab17d8ddd28f91a37546e1d2bf12b837274105ef64e435aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
