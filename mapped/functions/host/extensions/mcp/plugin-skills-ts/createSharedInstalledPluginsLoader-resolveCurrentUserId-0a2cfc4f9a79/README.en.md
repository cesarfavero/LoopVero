# `createSharedInstalledPluginsLoader/resolveCurrentUserId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/plugin-skills.ts` · [Module README](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701784-701796](../../../../../../../reference/runtime/host-main.cjs#L701784-L701796) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701784-701796](../../../../../../../reference/runtime/host-main.cjs#L701784-L701796) | 2 | 0 | 2 | 2 | 0 | 1 |

### host:701784

Calls written directly in this body: `dashboardClient.getMe`, `deps.auth.getTeamId`, `deps.log`, `errorLogTag`, `selectedTeamGetMeRequest`.

Assignment or increment targets: `currentUserId`.

SHA-256 of the source span: `3d0bb734eb99caea5c57536ef4474f25fb12f048d4fc2e6d4a08cc05dd5574b1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
