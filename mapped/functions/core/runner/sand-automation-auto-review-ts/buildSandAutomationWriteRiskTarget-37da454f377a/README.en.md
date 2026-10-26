# `buildSandAutomationWriteRiskTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/sand-automation-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-automation-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762210-762257](../../../../../../reference/runtime/host-main.cjs#L762210-L762257) | `FunctionDeclaration` | no | `args` |
| [evaluation:554820-554867](../../../../../../reference/runtime/sand-eval-runner.cjs#L554820-L554867) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762210-762257](../../../../../../reference/runtime/host-main.cjs#L762210-L762257) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554820-554867](../../../../../../reference/runtime/sand-eval-runner.cjs#L554820-L554867) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:762210

Calls written directly in this body: `buildProjectPermissionsContext`, `describeTrigger`, `new SmartModeRiskTarget`, `referencedSkills.map`, `referencingRoutines.map`, `serializeStoredTrigger`, `structFromRecord`, `triggerSchedule`.

SHA-256 of the source span: `8de2a1764502551f497a47d0f95fbc454223623b6ff6adb03d4bdea10ce4c122`.

### evaluation:554820

Calls written directly in this body: `buildProjectPermissionsContext`, `describeTrigger`, `new SmartModeRiskTarget`, `referencedSkills.map`, `referencingRoutines.map`, `serializeStoredTrigger`, `structFromRecord`, `triggerSchedule`.

SHA-256 of the source span: `8de2a1764502551f497a47d0f95fbc454223623b6ff6adb03d4bdea10ce4c122`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
