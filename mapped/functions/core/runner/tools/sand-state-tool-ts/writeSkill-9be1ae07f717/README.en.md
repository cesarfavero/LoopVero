# `writeSkill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762854-762941](../../../../../../../reference/runtime/host-main.cjs#L762854-L762941) | `FunctionDeclaration` | yes | `args, deps, need` |
| [evaluation:555464-555551](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555464-L555551) | `FunctionDeclaration` | yes | `args, deps, need` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762854-762941](../../../../../../../reference/runtime/host-main.cjs#L762854-L762941) | 7 | 0 | 3 | 6 | 0 | 0 |
| [evaluation:555464-555551](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555464-L555551) | 7 | 0 | 3 | 6 | 0 | 0 |

### host:762854

Calls written directly in this body: `.filter`, `.find`, `RESERVED_MANAGED_SKILL_IDS.has`, `deps.automationStore.list`, `deps.automationWriteProvenance`, `deps.canReviewAutomationWrites`, `deps.reviewAutomationWrite`, `deps.skillStore.list`, `deps.state.writeSkill`, `firingAutomationReviewTarget`, `need`, `otherPluginSkillRefusal`, `referencingAutomations.map`, `referencingAutomations.some`, `resolveNamedSkill`, `resolveStoredSkillWriteProvenance`, `reviewedWriteProvenance`, `slugifySkillName`, `storedFiringAutomation`, `writeAutomation`.

Assignment or increment targets: `review`.

SHA-256 of the source span: `0ce084ae568c59dad46813333c5aa7cd393db5ad01cb19dc7a0cdcb8af8ed0d3`.

### evaluation:555464

Calls written directly in this body: `.filter`, `.find`, `RESERVED_MANAGED_SKILL_IDS.has`, `deps.automationStore.list`, `deps.automationWriteProvenance`, `deps.canReviewAutomationWrites`, `deps.reviewAutomationWrite`, `deps.skillStore.list`, `deps.state.writeSkill`, `firingAutomationReviewTarget`, `need`, `otherPluginSkillRefusal`, `referencingAutomations.map`, `referencingAutomations.some`, `resolveNamedSkill`, `resolveStoredSkillWriteProvenance`, `reviewedWriteProvenance`, `slugifySkillName`, `storedFiringAutomation`, `writeAutomation`.

Assignment or increment targets: `review`.

SHA-256 of the source span: `0ce084ae568c59dad46813333c5aa7cd393db5ad01cb19dc7a0cdcb8af8ed0d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
