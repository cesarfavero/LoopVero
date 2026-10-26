# `createSlackSetupTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-slack-setup-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-slack-setup-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781348-781360](../../../../../../../reference/runtime/host-main.cjs#L781348-L781360) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |
| [evaluation:581695-581707](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581695-L581707) | `ArrowFunctionExpression` | yes | `_ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781348-781360](../../../../../../../reference/runtime/host-main.cjs#L781348-L781360) | 4 | 0 | 2 | 3 | 0 | 0 |
| [evaluation:581695-581707](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581695-L581707) | 4 | 0 | 2 | 3 | 0 | 0 |

### host:781348

Calls written directly in this body: `Date.now`, `d.isTeamSetupUnderway`, `d.onSendMessage`, `d.setup.start`, `d.setup.status`, `describeStart`, `describeState`, `ownerStepMessage`.

SHA-256 of the source span: `796cd0f6ccda01a21ea1efcc8b812deb3d15303f97fad36888635e065cde21f2`.

### evaluation:581695

Calls written directly in this body: `Date.now`, `d.isTeamSetupUnderway`, `d.onSendMessage`, `d.setup.start`, `d.setup.status`, `describeStart`, `describeState`, `ownerStepMessage`.

SHA-256 of the source span: `796cd0f6ccda01a21ea1efcc8b812deb3d15303f97fad36888635e065cde21f2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
