# `SandExperimentServiceCore.computeSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553429-553472](../../../../../../../reference/runtime/host-main.cjs#L553429-L553472) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553429-553472](../../../../../../../reference/runtime/host-main.cjs#L553429-L553472) | 4 | 3 | 0 | 1 | 0 | 0 |

### host:553429

Calls written directly in this body: `Object.keys`, `isKeyOf`, `this.checkFeatureGate`, `this.computeExperimentsDevPanel`, `this.computeFeatureFlagDevPanel`, `this.getComposerTriggerExperimentEnabled`, `this.getDynamicConfig`, `this.getExperiment`, `this.getGroupChatDiscouragementPolicy`, `this.getInviteTeammatesPlacement`, `this.getOnboardingJobRoleEnabled`, `this.getOnboardingNotificationsAskEnabled`, `this.getOnboardingRoleUseCaseBotsEnabled`, `this.getSidebarSuggestedBotsEnabled`, `this.overrideStore.isFlagName`.

Assignment or increment targets: `dynamicConfigs[computed]`, `experiments[computed]`, `featureGates[computed]`.

SHA-256 of the source span: `8f4f4d088dc10b9943019b32a5488ecdeb0ba5ecd9704c8712fcb4504ba741e2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
