# `skill.delete`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763007-763027](../../../../../../../reference/runtime/host-main.cjs#L763007-L763027) | `ArrowFunctionExpression` | yes | `args, deps, need` |
| [evaluation:555617-555637](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555617-L555637) | `ArrowFunctionExpression` | yes | `args, deps, need` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763007-763027](../../../../../../../reference/runtime/host-main.cjs#L763007-L763027) | 4 | 0 | 1 | 4 | 0 | 0 |
| [evaluation:555617-555637](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555617-L555637) | 4 | 0 | 1 | 4 | 0 | 0 |

### host:763007

Calls written directly in this body: `deps.automationWriteProvenance`, `deps.canReviewAutomationWrites`, `deps.state.deleteSkill`, `isBotSkillsPluginSkill`, `need`, `otherPluginSkillRefusal`, `refuseUnreviewableAutomationRemoval`, `resolveNamedSkill`, `reviewedWriteProvenance`.

SHA-256 of the source span: `3282eef8656cce3732b2ae1b4df72f50d6dbebd47fee8565a7e246969b4f220d`.

### evaluation:555617

Calls written directly in this body: `deps.automationWriteProvenance`, `deps.canReviewAutomationWrites`, `deps.state.deleteSkill`, `isBotSkillsPluginSkill`, `need`, `otherPluginSkillRefusal`, `refuseUnreviewableAutomationRemoval`, `resolveNamedSkill`, `reviewedWriteProvenance`.

SHA-256 of the source span: `3282eef8656cce3732b2ae1b4df72f50d6dbebd47fee8565a7e246969b4f220d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
