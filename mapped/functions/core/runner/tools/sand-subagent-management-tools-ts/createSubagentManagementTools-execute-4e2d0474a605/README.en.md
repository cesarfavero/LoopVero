# `createSubagentManagementTools/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-subagent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781072-781090](../../../../../../../reference/runtime/host-main.cjs#L781072-L781090) | `ArrowFunctionExpression` | yes | `_ctx, args, deps` |
| [host:781097-781113](../../../../../../../reference/runtime/host-main.cjs#L781097-L781113) | `ArrowFunctionExpression` | yes | `ctx, args, deps` |
| [host:781120-781139](../../../../../../../reference/runtime/host-main.cjs#L781120-L781139) | `ArrowFunctionExpression` | yes | `ctx, args, deps` |
| [evaluation:581419-581437](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581419-L581437) | `ArrowFunctionExpression` | yes | `_ctx, args, deps` |
| [evaluation:581444-581460](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581444-L581460) | `ArrowFunctionExpression` | yes | `ctx, args, deps` |
| [evaluation:581467-581486](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581467-L581486) | `ArrowFunctionExpression` | yes | `ctx, args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781072-781090](../../../../../../../reference/runtime/host-main.cjs#L781072-L781090) | 3 | 0 | 3 | 4 | 0 | 0 |
| [host:781097-781113](../../../../../../../reference/runtime/host-main.cjs#L781097-L781113) | 3 | 0 | 3 | 3 | 0 | 0 |
| [host:781120-781139](../../../../../../../reference/runtime/host-main.cjs#L781120-L781139) | 2 | 1 | 3 | 3 | 0 | 0 |
| [evaluation:581419-581437](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581419-L581437) | 3 | 0 | 3 | 4 | 0 | 0 |
| [evaluation:581444-581460](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581444-L581460) | 3 | 0 | 3 | 3 | 0 | 0 |
| [evaluation:581467-581486](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581467-L581486) | 2 | 1 | 3 | 3 | 0 | 0 |

### host:781072

Calls written directly in this body: `.join`, `deps.getRunningSubagent`, `deps.listRunningSubagents`, `describeRunningSubagent`, `notRunningMessage`, `running.map`.

SHA-256 of the source span: `b7e23d2d655cbd11bebbc7b2a34ffc6f6d8551686e385d926594ca6c1777f23b`.

### host:781097

Calls written directly in this body: `deps.listRunningSubagents`, `deps.reviewSteer`, `deps.steerSubagent`, `notRunningMessage`.

SHA-256 of the source span: `6263ea4d744304e579713843bfb25b3a907f93198e030ac550b0b18cd561370d`.

### host:781120

Calls written directly in this body: `deps.abortSubagent`, `deps.listRunningSubagents`, `formatStopAllSubagentsReport`, `hasSubagentId`, `notRunningMessage`, `recordStopped`, `stopAllRunningSubagents`.

SHA-256 of the source span: `0790dc5e265888a788afa6489e931cf6a97b8012a07ff57f4716eb7d0ece8d1c`.

### evaluation:581419

Calls written directly in this body: `.join`, `deps.getRunningSubagent`, `deps.listRunningSubagents`, `describeRunningSubagent`, `notRunningMessage`, `running.map`.

SHA-256 of the source span: `b7e23d2d655cbd11bebbc7b2a34ffc6f6d8551686e385d926594ca6c1777f23b`.

### evaluation:581444

Calls written directly in this body: `deps.listRunningSubagents`, `deps.reviewSteer`, `deps.steerSubagent`, `notRunningMessage`.

SHA-256 of the source span: `6263ea4d744304e579713843bfb25b3a907f93198e030ac550b0b18cd561370d`.

### evaluation:581467

Calls written directly in this body: `deps.abortSubagent`, `deps.listRunningSubagents`, `formatStopAllSubagentsReport`, `hasSubagentId`, `notRunningMessage`, `recordStopped`, `stopAllRunningSubagents`.

SHA-256 of the source span: `0790dc5e265888a788afa6489e931cf6a97b8012a07ff57f4716eb7d0ece8d1c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
