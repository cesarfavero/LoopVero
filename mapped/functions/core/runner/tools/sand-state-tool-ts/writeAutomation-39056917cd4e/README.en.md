# `writeAutomation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762721-762838](../../../../../../../reference/runtime/host-main.cjs#L762721-L762838) | `FunctionDeclaration` | yes | `args, deps, need` |
| [evaluation:555331-555448](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555331-L555448) | `FunctionDeclaration` | yes | `args, deps, need` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762721-762838](../../../../../../../reference/runtime/host-main.cjs#L762721-L762838) | 23 | 0 | 7 | 12 | 1 | 0 |
| [evaluation:555331-555448](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555331-L555448) | 23 | 0 | 7 | 12 | 1 | 0 |

### host:762721

Calls written directly in this body: `.find`, `.some`, `applyAutomationTiming`, `deps.activeAutomationWakeId`, `deps.automationStore.creationRefusal`, `deps.automationStore.list`, `deps.automationTiming`, `deps.automationWriteProvenance`, `deps.canCreateAutomation`, `deps.canReviewAutomationWrites`, `deps.onListenerAutomationSaved`, `deps.reviewAutomationWrite`, `deps.state.createAutomation`, `deps.state.updateAutomation`, `firingAutomationReviewTarget`, `isTemplateSetupConsentedWrite`, `need`, `new SandToolInputError`, `resolveReferencedSkills`, `resolveTrigger`, `reviewedWriteProvenance`, `stateWriteOk`, `storedFiringAutomation`, `triggerCronSchedules`, `unescapeEventText`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `162d057c109de36fa82d6bfac01b4bda21c6a521984035ccd827467e586130a3`.

### evaluation:555331

Calls written directly in this body: `.find`, `.some`, `applyAutomationTiming`, `deps.activeAutomationWakeId`, `deps.automationStore.creationRefusal`, `deps.automationStore.list`, `deps.automationTiming`, `deps.automationWriteProvenance`, `deps.canCreateAutomation`, `deps.canReviewAutomationWrites`, `deps.onListenerAutomationSaved`, `deps.reviewAutomationWrite`, `deps.state.createAutomation`, `deps.state.updateAutomation`, `firingAutomationReviewTarget`, `isTemplateSetupConsentedWrite`, `need`, `new SandToolInputError`, `resolveReferencedSkills`, `resolveTrigger`, `reviewedWriteProvenance`, `stateWriteOk`, `storedFiringAutomation`, `triggerCronSchedules`, `unescapeEventText`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `162d057c109de36fa82d6bfac01b4bda21c6a521984035ccd827467e586130a3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
